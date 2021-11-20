import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  /* linksMenu: Array<any> = [
    {
      name: 'Home',
      icon: 'uil-estate'
    },
    {
      name: 'Propiedades',
      icon: 'uil-building'
    },
    {
      name: 'Ubicaciones',
      icon: 'uil-map-pin-alt'
    }
  ] */

  mainMenu: {
    defaultOptions: Array<any>, accessLink: Array<any>
  } = { defaultOptions: [], accessLink: []}

  customOptions: Array<any> = []

  constructor() { }

  ngOnInit(): void {

    this.mainMenu.defaultOptions = [
      {
        name: 'Casas',
        icon: 'uil-estate',
        router: ['/']
      },
      {
        name: 'Apartamentos',
        icon: 'uil-building',
        router: ['/', 'properties']
      },
      {
        name: 'Fincas',
        icon: 'uil-map-pin-alt',
        router: ['/', 'locations']
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Home',
        icon: 'uil-estate',
        router: ['/']
      },
      {
        name: 'Propiedades',
        icon: 'uil-building',
        router: ['/', 'properties']
      }
    ]

    this.customOptions = [
      {
        name: 'Item 1',
        router: ['/']
      },
      {
        name: 'Item 2',
        router: ['/']
      },
      {
        name: 'Item 3',
        router: ['/']
      }
    ]

  }

}
