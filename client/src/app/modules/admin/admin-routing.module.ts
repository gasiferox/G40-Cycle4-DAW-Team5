import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { AddLocationComponent } from './locations/add-location/add-location.component';
import { DeleteLocationComponent } from './locations/delete-location/delete-location.component';
import { EditLocationComponent } from './locations/edit-location/edit-location.component';
import { GetAllLocationsComponent } from './locations/get-all-locations/get-all-locations.component';
=======
import { AdminComponent } from './admin/admin.component';
import { AddLocationComponent } from './locations/pages/add-location/add-location.component';
import { DeleteLocationComponent } from './locations/pages/delete-location/delete-location.component';
import { EditLocationComponent } from './locations/pages/edit-location/edit-location.component';
import { GetAllLocationsComponent } from './locations/pages/get-all-locations/get-all-locations.component';
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041
import { AddPropertyComponent } from './properties/add-property/add-property.component';
import { DeletePropertyComponent } from './properties/delete-property/delete-property.component';
import { EditPropertyComponent } from './properties/edit-property/edit-property.component';
import { GetAllPropertiesComponent } from './properties/get-all-properties/get-all-properties.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { GetAllUsersComponent } from './users/get-all-users/get-all-users.component';
<<<<<<< HEAD
import { ContactoComponent } from '@modules/user/contacto/contacto.component';
import { AcercaComponent } from '@modules/user/acerca/acerca.component';
import { DashboardComponent } from '@modules/user/dashboard/dashboard.component';
import { RegisterComponent } from '@modules/auth/register/register.component';
import { LoginPageComponent } from '@modules/auth/login-page/login-page.component';

const routes: Routes = [
  {
=======

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041
    path: 'add-user',
    component: AddUserComponent
  },
  {
    path: 'get-all-users',
    component: GetAllUsersComponent
  },
  {
    path: 'edit-user',
    component: EditUserComponent
  },
  {
    path: 'delete-user',
    component: DeleteUserComponent
  },
  {
    path: 'add-location',
    component: AddLocationComponent
  },
  {
    path: 'get-all-locations',
    component: GetAllLocationsComponent
  },
  {
    path: 'edit-location',
    component: EditLocationComponent
  },
  {
    path: 'delete-location',
    component: DeleteLocationComponent
  },
  {
    path: 'add-property',
    component: AddPropertyComponent
  },
  {
    path: 'get-all-properties',
    component: GetAllPropertiesComponent
  },
  {
    path: 'edit-property',
    component: EditPropertyComponent
  },
  {
    path: 'delete-property',
    component: DeletePropertyComponent
<<<<<<< HEAD
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'acerca',
    component: AcercaComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
  ,{
    path: 'loginpage',
    component: LoginPageComponent
  }

=======
  }
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
