import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    UsuarioComponent,
    DashboardComponent,
    AcercaComponent,
    ContactoComponent,
  

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
