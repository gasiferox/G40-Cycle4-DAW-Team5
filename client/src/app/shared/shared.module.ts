import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
<<<<<<< HEAD
import { SideBarHomeComponent } from './side-bar-home/side-bar-home.component';
=======
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
=======
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarHomeComponent } from './side-bar-home/side-bar-home.component';
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041



@NgModule({
  declarations: [
    SideBarComponent,
<<<<<<< HEAD
    SideBarHomeComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent
=======
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    DashboardComponent,
    SideBarHomeComponent
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideBarComponent,
<<<<<<< HEAD
    SideBarHomeComponent,
    HeaderComponent,
    FooterComponent
=======
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SideBarHomeComponent
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041
  ]
})
export class SharedModule { }
