import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  constructor(private _http: HttpClient) {}

  apiUrl = 'https://souls-heroes-backend-59560c8bae67.herokuapp.com';

  // SUBSCRIBE
  subscribeMember(data: any): Observable<any> {
    return this._http.post(`${this.apiUrl}/subscribe`, data)
  }
}
