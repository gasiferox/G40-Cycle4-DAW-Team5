import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddUserComponent } from '@modules/admin/users/add-user/add-user.component';
import { EditUserComponent } from '@modules/admin/users/edit-user/edit-user.component';
import { DeleteUserComponent } from '@modules/admin/users/delete-user/delete-user.component';
import { GetAllUsersComponent } from '@modules/admin/users/get-all-users/get-all-users.component';
import { GetUserByIdComponent } from '@modules/admin/users/get-user-by-id/get-user-by-id.component';
import { AddLocationComponent } from '@modules/admin/locations/add-location/add-location.component';
import { GetAllLocationsComponent } from '@modules/admin/locations/get-all-locations/get-all-locations.component';
import { EditLocationComponent } from '@modules/admin/locations/edit-location/edit-location.component';
import { DeleteLocationComponent } from '@modules/admin/locations/delete-location/delete-location.component';
import { GetLocationByIdComponent } from '@modules/admin/locations/get-location-by-id/get-location-by-id.component';
import { AddPropertyComponent } from '@modules/admin/properties/add-property/add-property.component';
import { GetAllPropertiesComponent } from '@modules/admin/properties/get-all-properties/get-all-properties.component';
import { GetPropertyByIdComponent } from '@modules/admin/properties/get-property-by-id/get-property-by-id.component';
import { EditPropertyComponent } from '@modules/admin/properties/edit-property/edit-property.component';
import { DeletePropertyComponent } from '@modules/admin/properties/delete-property/delete-property.component';


@NgModule({
  declarations: [
    UsuarioComponent,
    DashboardComponent,
    AcercaComponent,
    ContactoComponent,

    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    GetAllUsersComponent,
    GetUserByIdComponent,
    AddLocationComponent,
    GetAllLocationsComponent,
    EditLocationComponent,
    DeleteLocationComponent,
    GetLocationByIdComponent,
    AddPropertyComponent,
    GetAllPropertiesComponent,
    GetPropertyByIdComponent,
    EditPropertyComponent,
    DeletePropertyComponent
  

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
