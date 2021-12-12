import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
=======
import { GetAllLocationsComponent } from '@modules/admin/locations/pages/get-all-locations/get-all-locations.component';
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041
import { HomePageComponent } from '@modules/home/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    /* redirectTo: 'admin', */
    component: HomePageComponent,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
<<<<<<< HEAD
=======
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('@modules/admin/admin.module').then(m => m.AdminModule)
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }