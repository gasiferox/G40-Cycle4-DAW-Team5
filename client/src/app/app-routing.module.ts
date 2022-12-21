import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllLocationsComponent } from '@modules/admin/locations/pages/get-all-locations/get-all-locations.component';
import { HomePageComponent } from '@modules/home/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    /* redirectTo: 'admin', */
    component: HomePageComponent,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('@modules/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
