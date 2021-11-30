import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'login', //  http://localhost:4200/auth/login
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  },
  {
    path: 'register', // http://localhost:4200/auth/register
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
