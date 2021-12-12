import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
<<<<<<< HEAD

import { SharedModule } from '@shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
=======
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '@shared/shared.module';
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
