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
    dashboard: Array<any>,
<<<<<<< HEAD
    loginpage: Array<any>,
=======
    crud: Array<any>,
    login: Array<any>,
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041
    register: Array<any>
  } = { contacto: [],
    acerca: [],
    dashboard: [],
<<<<<<< HEAD
    loginpage: [],
=======
    crud: [],
    login: [],
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041
    register: []}


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
<<<<<<< HEAD
      }
    ]
    this.Menu.loginpage = [
      {
        name: 'loginpage',
        icon: 'uil-plus',
        router: ['/', 'admin', 'loginpage']
=======
      },
    ]
    this.Menu.crud = [
      {
        name: 'Crud',
        icon: 'uil-plus',
        router: ['/', 'admin', 'crud']
      },
    ]
    this.Menu.login = [
      {
        name: 'login',
        icon: 'uil-plus',
        router: ['/', 'admin', 'login']
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041
      }
    ]
      this.Menu.register = [
        {
          name: 'register',
          icon: 'uil-plus',
          router: ['/', 'admin', 'register']
        }
    ]

  }

<<<<<<< HEAD
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

=======
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041
}
