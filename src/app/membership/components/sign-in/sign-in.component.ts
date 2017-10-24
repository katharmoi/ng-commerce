import { AuthService } from '../../../shared/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent  {

  constructor(private authService : AuthService) { }

  signInGoogle() {
    this.authService.loginGoogle();
  }

  signInFacebook(){
    this.authService.loginFacebook();
  }

  signInEmail(email:string, pass:string ){
    this.authService.loginEmail(email, pass);
  }

  

}
