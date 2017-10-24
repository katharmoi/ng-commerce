import { Observable } from 'rxjs/Rx';
import { UserService } from '../../shared/services/user.service';
import { AuthService } from '../../shared/services/auth.service';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable, state } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router, private userService: UserService) {
  }

  canActivate(): Observable<boolean> {
   return this.auth.adminUser$
      .map(adminUser =>{
          return (adminUser) ? true : false;
      });
  }

}

