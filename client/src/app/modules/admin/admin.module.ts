import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { GetAllUsersComponent } from './users/get-all-users/get-all-users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GetUserByIdComponent } from './users/get-user-by-id/get-user-by-id.component';
import { AddLocationComponent } from './locations/add-location/add-location.component';
import { GetAllLocationsComponent } from './locations/get-all-locations/get-all-locations.component';
import { EditLocationComponent } from './locations/edit-location/edit-location.component';
import { DeleteLocationComponent } from './locations/delete-location/delete-location.component';
import { GetLocationByIdComponent } from './locations/get-location-by-id/get-location-by-id.component';
import { AddPropertyComponent } from './properties/add-property/add-property.component';
import { GetAllPropertiesComponent } from './properties/get-all-properties/get-all-properties.component';
import { GetPropertyByIdComponent } from './properties/get-property-by-id/get-property-by-id.component';
import { EditPropertyComponent } from './properties/edit-property/edit-property.component';
import { DeletePropertyComponent } from './properties/delete-property/delete-property.component';
import { ContactoComponent } from '@modules/user/contacto/contacto.component';
import { AcercaComponent } from '@modules/user/acerca/acerca.component';
import { DashboardComponent } from '@modules/user/dashboard/dashboard.component';
// import { LoginPageComponent } from '@modules/auth/login-page/login-page.component';

@NgModule({
  declarations: [
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
    DeletePropertyComponent,
    ContactoComponent,
    AcercaComponent,
    DashboardComponent
    //,LoginPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
