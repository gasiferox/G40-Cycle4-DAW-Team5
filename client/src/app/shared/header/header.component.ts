import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  Menu: {
    contacto: Array<any>,
    acerca: Array<any>,
    dashboard: Array<any>
    loginpage: Array<any>
  } = { contacto: [],
    acerca: [],
    dashboard: [],
    loginpage: []}


  customOptions: Array<any> = []

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.Menu.contacto = [
      {
        name: 'Contacto',
        icon: 'uil-plus',
        router: ['/', 'admin', 'contacto']
      },
    ]
    this.Menu.acerca = [
      {
        name: 'Acerca',
        icon: 'uil-plus',
        router: ['/', 'admin', 'acerca']
      },
    ]
    this.Menu.dashboard = [
      {
        name: 'Dashboard',
        icon: 'uil-plus',
        router: ['/', 'admin', 'dashboard']
      }
    ]
    this.Menu.loginpage = [
      {
        name: 'loginpage',
        icon: 'uil-plus',
        router: ['/', 'admin', 'loginpage']
      }
    ]

  }

  /* goTo($event: any): void {
    this.router.navigate(['/', 'admin'], {
      queryParams: {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
      }
    })
    console.log($event)
  } */

}
