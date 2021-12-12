import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
<<<<<<< HEAD
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
=======
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordRecoveryComponent } from './pages/password-recovery/password-recovery.component';
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041


@NgModule({
  declarations: [
    LoginPageComponent,
<<<<<<< HEAD
    RegisterComponent
=======
    PasswordRecoveryComponent
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule /* ReactiveFormsModule import */
  ]
})
export class AuthModule { }
