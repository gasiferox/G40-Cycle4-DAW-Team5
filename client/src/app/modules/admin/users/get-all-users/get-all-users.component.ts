<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from '@core/models/users.model';
import { UserService } from '@modules/admin/services/user.service';
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.css']
})
export class GetAllUsersComponent implements OnInit {

<<<<<<< HEAD
  mockDb: {
    mockUsers: Array<any>, mockLocations: Array<any>, mockProperties: Array<any>
  } = { mockUsers: [], mockLocations: [], mockProperties: [] }

  constructor() { }

  ngOnInit(): void {

    this.mockDb.mockUsers = [
=======
  /* mockDb: {
    mockUsers: Array<any>, mockLocations: Array<any>, mockProperties: Array<any>
  } = { mockUsers: [], mockLocations: [], mockProperties: [] } */

  usersDB: Array<UserModel> = []

  constructor(private _userService: UserService) { }

  ngOnInit(): void {

    /* this.mockDb.mockUsers = [
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041
      {
        id: '000000000001',
        image: 'https://avatars.githubusercontent.com/u/31348478?s=400&u=3cf146c920fe67290e7e104eb24a0a72eb2bd30f&v=4',
        name: 'Gustavo',
        lastName: 'Romero',
        document: '79875452',
        phone: '321456789',
        email: 'gasifero@gmail.com',
<<<<<<< HEAD
        password: '123456'
=======
        password: '123456',
        rol: 'usuario'
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041
      },
      {
        id: '000000000002',
        image: 'https://avatars.githubusercontent.com/u/87404306?s=40&v=4',
        name: 'Freddy',
        lastName: 'Herrera',
        document: '86084246',
        phone: '3132435238',
        email: 'freddy.herrera.1984@gmail.com',
<<<<<<< HEAD
        password: '123456'
=======
        password: '123456',
        rol: 'Administrador'
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041
      },
      {

        id: '000000000003',
        image: 'https://avatars.githubusercontent.com/u/90069212?s=400&v=4',
        name: 'Juan Diego',
        lastName: 'Varón Berrio',
        document: '1030718880',
        phone: '3212854687',
        email: 'juand@gmail.com',
<<<<<<< HEAD
        password: '7654321'
=======
        password: '7654321',
        rol: 'Usuario'
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041
      },
      {

        id: '000000000004',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
        name: 'Leonardo',
        lastName: 'Jiménez',
        document: '1031140189',
        phone: '3183540367',
        email: 'ljim230@gmail.com',
<<<<<<< HEAD
        password: '123456'
=======
        password: '123456',
        rol: 'Administrador'
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041
      },
      {
        id: '000000000005',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
        name: 'Maria Patricia',
        lastName: 'Guevara',
        document: '40782026',
        phone: '3202312679',
        email: 'mariapatriciaguevaracastano@gmail.com',
<<<<<<< HEAD
        password: '7654321'
      }
    ]
=======
        password: '7654321',
        rol: 'Administrador'
      }
    ] */

    this._userService.getAllUsers$()
    .subscribe((response: UserModel[]) => {
      this.usersDB = response
      console.log('-----> :) :)', response)
    })
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041

  }

}
