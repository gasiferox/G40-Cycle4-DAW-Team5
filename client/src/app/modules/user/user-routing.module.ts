import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AddUserComponent } from '@modules/admin/users/add-user/add-user.component';
import { EditUserComponent } from '@modules/admin/users/edit-user/edit-user.component';
import { DeleteUserComponent } from '@modules/admin/users/delete-user/delete-user.component';
import { GetAllUsersComponent } from '@modules/admin/users/get-all-users/get-all-users.component';
import { AddLocationComponent } from '@modules/admin/locations/add-location/add-location.component';
import { GetAllLocationsComponent } from '@modules/admin/locations/get-all-locations/get-all-locations.component';
import { EditLocationComponent } from '@modules/admin/locations/edit-location/edit-location.component';
import { DeleteLocationComponent } from '@modules/admin/locations/delete-location/delete-location.component';
import { AddPropertyComponent } from '@modules/admin/properties/add-property/add-property.component';
import { GetAllPropertiesComponent } from '@modules/admin/properties/get-all-properties/get-all-properties.component';
import { EditPropertyComponent } from '@modules/admin/properties/edit-property/edit-property.component';
import { DeletePropertyComponent } from '@modules/admin/properties/delete-property/delete-property.component';


const routes: Routes = [
{
  path: 'User',
  loadChildren: () => import('@modules/user/user.module').then(m => m.UserModule)
},

{
path: 'UsuarioComponent',
component: UsuarioComponent
},
{
path: 'DashboardComponent',
component: DashboardComponent
}, 
{
  path: 'AcercaComponent',
  component: AcercaComponent
},
{
path: 'ContactoComponent',
component:  ContactoComponent
},
{
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
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
