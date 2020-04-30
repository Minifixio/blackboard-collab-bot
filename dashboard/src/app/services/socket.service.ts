import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  urlApi = 'http://localhost:3000';
  socket: any;

  constructor() { }

  setup() {
    this.socket = io(this.urlApi);
  }

  emit(tag, params) {
    this.socket.emit(tag, params);
  }

  subscribe(tag) {
    return new Observable((observer) => {
      this.socket.on(tag, (info) => {
        observer.next(info);
      });
    });
  }
}
