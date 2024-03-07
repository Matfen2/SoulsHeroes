import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private _http: HttpClient) {}

  apiUrl = 'https://souls-heroes-backend-59560c8bae67.herokuapp.com/comics';

  // SEARCH
  getComics(title: any): Observable<any> {
    return this._http.get(`${this.apiUrl}/${title}`);
  }
}
