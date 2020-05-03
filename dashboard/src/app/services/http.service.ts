import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  urlApi = '/';
  uriApi = 'api';
  mainUrl = `${this.urlApi}/${this.uriApi}/`;

  constructor(
    private http: HttpClient
  ) { }

  get(tag): Observable<any> {
    return this.http.get(this.mainUrl + tag);
  }

  post(tag, postParams): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(this.mainUrl + tag, JSON.stringify(postParams), httpOptions);
  }
}
