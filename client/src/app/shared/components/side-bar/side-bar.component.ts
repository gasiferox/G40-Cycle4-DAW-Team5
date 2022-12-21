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

  /* mainMenu: {
    defaultOptions: Array<any>, accessLink: Array<any>
  } = { defaultOptions: [], accessLink: []} */

  mainMenu: {
    userOptions: Array<any>,
    locationOptions: Array<any>,
    propertyOptions: Array<any>
  } = { userOptions: [],
    locationOptions: [],
    propertyOptions: []}


  customOptions: Array<any> = []

  constructor() { }

  ngOnInit(): void {

    this.mainMenu.userOptions = [
      {
        name: 'Agregar Usuario',
        icon: 'uil-plus',
        router: ['/']
      },
      {
        name: 'Listar Usuario por Id',
        icon: 'uil-list-ol',
        router: ['/', 'properties']
      },
      {
        name: 'Actualizar usuario',
        icon: 'uil-edit',
        router: ['/', 'locations']
      },
      {
        name: 'Borrar usuario',
        icon: 'uil-trash-alt',
        router: ['/']
      }
    ]

    this.mainMenu.locationOptions = [
      {
        name: 'Agregar Ubicación',
        icon: 'uil-plus',
        router: ['/']
      },
      {
        name: 'Listar Ubicación por Id',
        icon: 'uil-list-ol',
        router: ['/', 'properties']
      },
      {
        name: 'Actualizar Ubicación',
        icon: 'uil-edit',
        router: ['/', 'locations']
      },
      {
        name: 'Borrar Ubicación',
        icon: 'uil-trash-alt',
        router: ['/']
      }
    ]

    this.mainMenu.propertyOptions = [
      {
        name: 'Agregar Inmueble',
        icon: 'uil-plus',
        router: ['/']
      },
      {
        name: 'Listar Inmueble por Id',
        icon: 'uil-list-ol',
        router: ['/', 'properties']
      },
      {
        name: 'Actualizar Inmueble',
        icon: 'uil-edit',
        router: ['/', 'locations']
      },
      {
        name: 'Borrar Inmueble',
        icon: 'uil-trash-alt',
        router: ['/']
      }
    ]



    /* this.mainMenu.accessLink = [
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
    ] */

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
