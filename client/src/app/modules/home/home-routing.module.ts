import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '@modules/user/dashboard/dashboard.component';
import { ErrorComponent } from '@shared/error/error.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('@modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }