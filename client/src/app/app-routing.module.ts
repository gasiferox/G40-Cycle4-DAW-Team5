import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from '@modules/user/usuario/usuario.component';





const routes: Routes = [
  {
    path: '',
    /* redirectTo: 'admin', */
    component: UsuarioComponent,
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
