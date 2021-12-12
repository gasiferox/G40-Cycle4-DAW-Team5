import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly URL = environment.api

  constructor(private _httpClient: HttpClient) {

  }

  getAllUsers$(): Observable<any> {
<<<<<<< HEAD
    return this._httpClient.get(`${this.URL}/tracks`)
=======
    return this._httpClient.get(`/api/users`)
>>>>>>> 50f81e79f56e82bcd5f320f39e367dc73311a041
  }

}
