import { Component } from '@angular/core';

import { AppUser } from '../../../shared/models/app-user';
import { AuthService } from '../../../shared/services/auth.service';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  unexpectedError;
  formData: {};

  constructor(private authService: AuthService, private userService: UserService) { }

  signUp(formData, password: string) {
    this.unexpectedError = null;
    this.authService.createUser(formData['email'], formData['password'])
      .then(() => {
        this.authService.user$.take(1)
          .subscribe((user) => {
            if (!user) return;
            this.userService.saveAppUser(user.uid,
              new AppUser(formData.email,
                formData.firstName || '' ,
                formData.lastName || '',
                formData.addressOne || '',
                formData.addressTwo || '',
                formData.city || '',
                formData.country || '',
                formData.postalCode || ''));
          })
      })
      .catch(error => this.unexpectedError = error);
  }


}
