import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarHomeComponent } from './side-bar-home/side-bar-home.component';



@NgModule({
  declarations: [
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    DashboardComponent,
    SideBarHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SideBarHomeComponent
  ]
})
export class SharedModule { }
