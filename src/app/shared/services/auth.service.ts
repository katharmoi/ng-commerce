import { create } from '@angular/language-service';

import { UserService } from './user.service';

import { AppUser } from '../models/app-user';

import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';
import { AdminUser } from '../models/admin-user';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;
  appUser$: Observable<AppUser>;
  adminUser$: Observable<AdminUser>;

  constructor(private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private userService: UserService) {
    this.user$ = afAuth.authState;

    this.appUser$ = this.user$
      .switchMap(user => {
        if (user) return this.userService.getUser(user.uid);
        return Observable.of(null);
      });

    this.adminUser$ = this.user$
      .switchMap(user => {
        // TODO change this to getAdmin
        if (user) return this.userService.getUser(user.uid);
        return Observable.of(null);
      });
    /*
    .filter((adminUser) => {
      return adminUser && adminUser.name;
    });
    */


  }


  loginGoogle() {
    // Get the caller url and save to local storage
    this.saveCallerUrl();

    // Auth with firebase using google
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  loginFacebook() {
    this.saveCallerUrl();

    // Auth with facebook
    this.afAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
  }

  loginEmail(email: string, pass: string) {
    this.saveCallerUrl();
    this.afAuth.auth.signInWithEmailAndPassword(email, pass);
  }

  createUser(user: string, password: string) {
    this.saveCallerUrl;
    return this.afAuth.auth.createUserWithEmailAndPassword(user, password);
  } 

  logout() {
    this.afAuth.auth.signOut();
  }

  private saveCallerUrl() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
  }

}
