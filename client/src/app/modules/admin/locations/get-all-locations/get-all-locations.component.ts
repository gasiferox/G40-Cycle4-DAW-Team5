import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-all-locations',
  templateUrl: './get-all-locations.component.html',
  styleUrls: ['./get-all-locations.component.css']
})
export class GetAllLocationsComponent implements OnInit {

  mockDb: {
    mockUsers: Array<any>, mockLocations: Array<any>, mockProperties: Array<any>
  } = { mockUsers: [], mockLocations: [], mockProperties: [] }


  constructor() { }

  ngOnInit(): void {

    this.mockDb.mockLocations = [
      {
        id: '1',
        departamento: "Cundinamarca",
        ciudad: "Bogotá",
        zona: 'Norte',
        vereda: ''
      },
      {
        id: '2',
        departamento: "Risaralda",
        ciudad: "Pereira",
        zona: 'Este',
        vereda: 'Tribunas2'
      },
      {
        id: '3',
        departamento: "Caquetá",
        ciudad: "Florencia",
        zona: 'Occidente',
        vereda: ''
      },
      {
        id: '4',
        departamento: "Qundío",
        ciudad: "Armenia",
        zona: 'Centro',
        vereda: '',
      },
      {
        id: '5',
        departamento: "Risaralda",
        ciudad: "Pereira",
        zona: 'Este',
        vereda: 'Tribunas',
      }
    ]
  }

}
