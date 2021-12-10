import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideBarComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
