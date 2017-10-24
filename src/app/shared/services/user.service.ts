import { AdminUser } from '../models/admin-user';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AppUser } from '../models/app-user';

@Injectable()
export class UserService {

  constructor(private db : AngularFireDatabase) { }

  save(user : firebase.User){
    this.db.object('/users/' +user.uid).update({
      name : user.displayName,
      email: user.email,
      id: user.uid
    });
  }

  saveAppUser(userId:string, user: AppUser){
    this.db.object('/users/' + userId).update(user);
  }

  saveAdminUser(user: AdminUser){
    this.db.object('/admin/' +user.id).update(user);
  }

  getAdmin(uid: string): FirebaseObjectObservable<AdminUser>{
    return this.db.object('/admin/' + uid);
  }

  getUser(uid: string): FirebaseObjectObservable<AppUser>{
    return this.db.object('/users/' + uid);
  }

}