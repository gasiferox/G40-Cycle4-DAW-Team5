import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from '@modules/dashboard/pages/dashboard-page/dashboard-page.component';
import { ErrorComponent } from '@shared/components/error/error.component';

const routes: Routes = [
  {
    path: 'auth',  //TODO: localhost:4200/auth
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',  //TODO: localhost:4200
    component: DashboardPageComponent,
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'admin',  //TODO: localhost:4200/admin
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
