import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  linksMenu: Array<any> = [
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
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
