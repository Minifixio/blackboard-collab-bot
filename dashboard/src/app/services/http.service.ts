import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl = `${environment.apiUrl}/api/`;

  constructor(
    private http: HttpClient
  ) { }

  get(tag): Observable<any> {
    return this.http.get(this.apiUrl + tag);
  }

  post(tag, postParams): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(this.apiUrl + tag, JSON.stringify(postParams), httpOptions);
  }
}
