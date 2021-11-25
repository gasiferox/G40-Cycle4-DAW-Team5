import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'loginpage',  /* http://localhost:4200/auth/login-page */
    component: LoginPageComponent
  },
  {
    path: '**',
    redirectTo: 'auth/login-page'
  },
  {
    path: 'register',  /* http://localhost:4200/auth/login */
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: 'auth/register'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
