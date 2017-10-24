import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule, MatInputModule,MatExpansionModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'login', component: SignInComponent },
      {path:'signUp', component:SignUpComponent  }
    ]),
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule
  ],
  declarations: [SignInComponent, SignOutComponent, SignUpComponent]
})
export class MembershipModule { }
