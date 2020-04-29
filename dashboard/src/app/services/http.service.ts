import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  urlApi = 'http://localhost:3000';
  uriApi = 'api';
  mainUrl = `${this.urlApi}/${this.uriApi}/`;

  constructor(
    private http: HttpClient
  ) { }

  get(tag): Observable<any> {
    return this.http.get(this.mainUrl + tag);
  }
}
