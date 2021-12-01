import { Component, OnInit } from '@angular/core';
import { UserService } from '@modules/admin/services/user.service';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.css']
})
export class GetAllUsersComponent implements OnInit {

  mockDb: {
    mockUsers: Array<any>, mockLocations: Array<any>, mockProperties: Array<any>
  } = { mockUsers: [], mockLocations: [], mockProperties: [] }

  constructor(private _userService: UserService) { }

  ngOnInit(): void {

    this._userService.getAllUsers$().subscribe(response => {console.log('Respuesta del server', response)})

    this.mockDb.mockUsers = [
      {
        id: '000000000001',
        image: 'https://avatars.githubusercontent.com/u/31348478?s=400&u=3cf146c920fe67290e7e104eb24a0a72eb2bd30f&v=4',
        name: 'Gustavo',
        lastName: 'Romero',
        document: '79875452',
        phone: '321456789',
        email: 'gasifero@gmail.com',
        password: '123456',
        rol: 'usuario'
      },
      {
        id: '000000000002',
        image: 'https://avatars.githubusercontent.com/u/87404306?s=40&v=4',
        name: 'Freddy',
        lastName: 'Herrera',
        document: '86084246',
        phone: '3132435238',
        email: 'freddy.herrera.1984@gmail.com',
        password: '123456',
        rol: 'Administrador'
      },
      {

        id: '000000000003',
        image: 'https://avatars.githubusercontent.com/u/90069212?s=400&v=4',
        name: 'Juan Diego',
        lastName: 'Varón Berrio',
        document: '1030718880',
        phone: '3212854687',
        email: 'juand@gmail.com',
        password: '7654321',
        rol: 'Usuario'
      },
      {

        id: '000000000004',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
        name: 'Leonardo',
        lastName: 'Jiménez',
        document: '1031140189',
        phone: '3183540367',
        email: 'ljim230@gmail.com',
        password: '123456',
        rol: 'Administrador'
      },
      {
        id: '000000000005',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
        name: 'Maria Patricia',
        lastName: 'Guevara',
        document: '40782026',
        phone: '3202312679',
        email: 'mariapatriciaguevaracastano@gmail.com',
        password: '7654321',
        rol: 'Administrador'
      }
    ]

  }

}
