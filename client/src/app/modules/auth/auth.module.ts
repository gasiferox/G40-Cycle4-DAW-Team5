import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ChangePageComponent } from './pages/change-page/change-page.component';
import { RecoveryPageComponent } from './pages/recovery-page/recovery-page.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    ChangePageComponent,
    RecoveryPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
