import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly URL = environment.api;

  constructor(private _httpClient: HttpClient) { }

  getAllUsers$(): Observable<any> {
    return this._httpClient.get(`${this.URL}/users`)
  }
}
