import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  sendCredentials(email: StaticRangeInit, password: string): void {
    console.log('oki doki', email, password)
  }

}
