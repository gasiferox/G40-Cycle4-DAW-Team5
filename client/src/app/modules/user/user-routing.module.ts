import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ContactoComponent } from './contacto/contacto.component';


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
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
