import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { AddLocationComponent } from './locations/add-location/add-location.component';
import { DeleteLocationComponent } from './locations/delete-location/delete-location.component';
import { UpdateLocationComponent } from './locations/update-location/update-location.component';
import { GetAllLocationsComponent } from './locations/get-all-locations/get-all-locations.component';
import { GetAllUsersComponent } from './users/get-all-users/get-all-users.component';
import { AddPropertyComponent } from './properties/add-property/add-property.component';
import { DeletePropertyComponent } from './properties/delete-property/delete-property.component';
import { UpdatePropertyComponent } from './properties/update-property/update-property.component';
import { GetAllPropertiesComponent } from './properties/get-all-properties/get-all-properties.component';


@NgModule({
  declarations: [
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    AddLocationComponent,
    DeleteLocationComponent,
    UpdateLocationComponent,
    GetAllLocationsComponent,
    GetAllUsersComponent,
    AddPropertyComponent,
    DeletePropertyComponent,
    UpdatePropertyComponent,
    GetAllPropertiesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
