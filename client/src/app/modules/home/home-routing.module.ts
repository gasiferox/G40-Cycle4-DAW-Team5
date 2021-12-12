import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
<<<<<<< HEAD
  {
    path: 'admin',
    loadChildren: () => import('@modules/admin/admin.module').then(m => m.AdminModule)
  }
=======
  /* {
    path: 'admin',
    loadChildren: () => import('@modules/admin/admin.module').then(m => m.AdminModule)
  } */
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
<<<<<<< HEAD
export class HomeRoutingModule { }
=======
export class HomeRoutingModule { }
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041
