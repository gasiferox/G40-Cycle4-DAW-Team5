import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PasswordRecoveryComponent } from './pages/password-recovery/password-recovery.component';

const routes: Routes = [
  {
    path: 'login',  /* http://localhost:4200/auth/login */
    component: LoginPageComponent
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  },
  {
    path: 'passrecovery', /* http://localhost:4200/auth/passrecovery */
    component: PasswordRecoveryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
