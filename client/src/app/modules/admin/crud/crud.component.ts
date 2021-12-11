import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  mainMenu: {
    contacto: Array<any>,
    userOptions: Array<any>,
    locationOptions: Array<any>,
    propertyOptions: Array<any>
  } = { contacto: [],
    userOptions: [],
    locationOptions: [],
    propertyOptions: []}


  customOptions: Array<any> = []

  constructor(private router: Router) { }

  ngOnInit(): void {


    this.mainMenu.userOptions = [
      {
        name: 'Agregar Usuario',
        icon: 'uil-plus',
        router: ['/', 'admin', 'add-user']
      },
      
      {
        name: 'Listar Usuarios',
        icon: 'uil-list-ol',
        router: ['/', 'admin', 'get-all-users']
      },
      {
        name: 'Actualizar usuario',
        icon: 'uil-edit',
        router: ['/', 'admin', 'edit-user']
      },
      {
        name: 'Borrar usuario',
        icon: 'uil-trash-alt',
        router: ['/', 'admin', 'delete-user']
      }
    ]

    this.mainMenu.locationOptions = [
      {
        name: 'Agregar Ubicación',
        icon: 'uil-plus',
        router: ['/', 'admin', 'add-location']
      },
      /* {
        name: 'Listar Ubicación por Id',
        icon: 'uil-list-ol',
        router: ['/', 'admin', 'get-location-by-id']
      }, */
      {
        name: 'Listar ubicaciones',
        icon: 'uil-list-ol',
        router: ['/', 'admin', 'get-all-locations']
      },
      {
        name: 'Actualizar Ubicación',
        icon: 'uil-edit',
        router: ['/', 'admin', 'edit-location']
      },
      {
        name: 'Borrar Ubicación',
        icon: 'uil-trash-alt',
        router: ['/', 'admin', 'delete-location']
      }
    ]

    this.mainMenu.propertyOptions = [
      {
        name: 'Agregar Inmueble',
        icon: 'uil-plus',
        router: ['/', 'admin', 'add-property']
      },
      /* {
        name: 'Listar Inmueble por Id',
        icon: 'uil-list-ol',
        router: ['/', 'admin', 'get-property-by-id']
      }, */
      {
        name: 'Listar Inmuebles',
        icon: 'uil-list-ol',
        router: ['/', 'admin', 'get-all-properties']
      },
      {
        name: 'Actualizar Inmueble',
        icon: 'uil-edit',
        router: ['/', 'admin', 'edit-property']
      },
      {
        name: 'Borrar Inmueble',
        icon: 'uil-trash-alt',
        router: ['/', 'admin', 'delete-property']
      }
    ]

  }


}
