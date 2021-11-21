import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';

const routes: Routes = [
  /* {
    path: '',
    component: PropertiesPageComponent,
    outlet: 'child'
  } */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }
