import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar-home',
  templateUrl: './side-bar-home.component.html',
  styleUrls: ['./side-bar-home.component.css']
})
export class SideBarHomeComponent implements OnInit {

  mainMenu: {
    userOptions: Array<any>,
    locationOptions: Array<any>,
    propertyOptions: Array<any>
  } = { userOptions: [],
    locationOptions: [],
    propertyOptions: []}


  customOptions: Array<any> = []

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.mainMenu.userOptions = [
      {
        name: 'Home',
        icon: 'uil-plus',
        router: ['/', 'user', 'dashboard']
      },
      {
        name: 'Acerca de',
        icon: 'uil-list-ol',
        router: ['/', 'user', 'acerca']
      },
      {
        name: 'Contacto',
        icon: 'uil-edit',
        router: ['/', 'user', 'contacto']
      },
      
    ]
  }
}
