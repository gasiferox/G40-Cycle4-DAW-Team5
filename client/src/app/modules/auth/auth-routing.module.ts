import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'loginpage',  /* http://localhost:4200/auth/login-page */
=======
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PasswordRecoveryComponent } from './pages/password-recovery/password-recovery.component';

const routes: Routes = [
  {
    path: 'login',  /* http://localhost:4200/auth/login */
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041
    component: LoginPageComponent
  },
  {
    path: '**',
<<<<<<< HEAD
    redirectTo: 'auth/login-page'
  },
  {
    path: 'register',  /* http://localhost:4200/auth/login */
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: 'auth/register'
=======
    redirectTo: 'auth/login'
  },
  {
    path: 'passrecovery', /* http://localhost:4200/auth/passrecovery */
    component: PasswordRecoveryComponent
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
