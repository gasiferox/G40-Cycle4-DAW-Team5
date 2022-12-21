import { Component, OnInit } from '@angular/core';
import { UserService } from '@modules/admin/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    /* this._userService.getAllUsers$().subscribe(response => {console.log('---> **DB**', response)}) */
  }

}
