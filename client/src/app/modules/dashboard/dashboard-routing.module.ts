import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /* {
    path: 'properties',
    loadChildren: () => import('@modules/properties/properties.module').then(m => m.PropertiesModule)
  },
  {
    path: 'locations',
    loadChildren: () => import('@modules/locations/locations.module').then(m => m.LocationsModule)
  }, */
  {
    path: '',
    loadChildren: () => import('@modules/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
