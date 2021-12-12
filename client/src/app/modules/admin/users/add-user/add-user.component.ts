import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { UserService } from '@modules/admin/services/user.service';
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
=======
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    /* this._userService.getAllUsers$().subscribe(response => {console.log('---> **DB**', response)}) */
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041
  }

}
