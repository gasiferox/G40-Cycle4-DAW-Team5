import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /* Variable init */
  // formLogin: FormGroup = new FormGroup({});

  // constructor(private _authService: AuthService) { }

  ngOnInit(): void {

  //   // this.formLogin = new FormGroup(
  //   //   {
  //   //     email: new FormControl('', [
  //   //       Validators.required,
  //   //       Validators.email
  //   //     ]),
  //   //     password: new FormControl('', [
  //   //       Validators.required,
  //   //       Validators.minLength(6),
  //   //       Validators.maxLength(12)
  //   //     ])
  //   //   }
  //   // )

  // }

  // sendLogin(): void {
  //   const { email, password } = this.formLogin.value
  //   /* console.log('Datos capturados satisfactoriamente', body) */
  //   this._authService.sendCredentials(email, password)
  //   .subscribe(ResponseOk => {
  //     console.log("Sesión iniciada correctamente")
  //   }, err => {
  //     console.log("Error en los datos de entrada, login y/o password")
  //   })
  }

}
