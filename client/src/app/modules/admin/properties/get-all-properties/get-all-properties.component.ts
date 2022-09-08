import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-all-properties',
  templateUrl: './get-all-properties.component.html',
  styleUrls: ['./get-all-properties.component.css']
})
export class GetAllPropertiesComponent implements OnInit {

  mockDb: {
    mockUsers: Array<any>, mockLocations: Array<any>, mockProperties: Array<any>
  } = { mockUsers: [], mockLocations: [], mockProperties: [] }


  constructor() { }

  ngOnInit(): void {

    this.mockDb.mockProperties = [
      {
        id: '1',
        tipo: "Apartamento",
        ubicacion: "",
        area: '94',
        precio: '685000000',
        habitaciones: '2',
        banos: '2',
        parqueadero: 'false',
        descripcion: "Apartamento amoblado",
        imagenes: ""
      },
      {
        id: '2',
        tipo: "Apartamento",
        ubicacion: "",
        area: '65.5',
        precio: '150000000',
        habitaciones: '3',
        banos: '2',
        parqueadero: 'true',
        descripcion: "Recien remodelado, pisos en ceramica y cocina integral",
        imagenes: ""
      },
      {

        id: '3',
        tipo: "casa",
        ubicacion: "",
        area: '380',
        precio: '850000000',
        habitaciones: '4',
        banos: '4',
        parqueadero: 'true',
        descripcion: "Casa campestre",
        imagenes: ""
      },
      {
        id: '4',
        tipo: "casa",
        ubicacion: "",
        area: '90',
        precio: '120000000',
        habitaciones: '3',
        banos: '2',
        parqueadero: 'true',
        descripcion: "Casa residencial",
        imagenes: ""
      },
      {
        id: '5',
        tipo: "apartamento",
        ubicacion: "",
        area: '72',
        precio: '120000000',
        habitaciones: '2',
        banos: '1',
        parqueadero: 'false',
        descripcion: "Apartamento residencial tercer piso",
        imagenes: ""
      },
      {
        id: '6',
        tipo: "casa",
        ubicacion: "",
        area: '100',
        precio: '250000000',
        habitaciones: '2',
        banos: '2',
        parqueadero: 'true',
        descripcion: "Casa en conjunto cerrado",
        imagenes: ""
      }
    ]
  }

}
