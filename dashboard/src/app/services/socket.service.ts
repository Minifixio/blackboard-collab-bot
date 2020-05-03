import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  urlApi = '/';
  socket: any;
  alive = true;

  constructor() { }

  setup() {
    this.socket = io(this.urlApi);
    this.alive = true;
    this.socket.on('connect_error', () => {
      this.alive = false;
    });

    this.socket.on('reconnect', () => {
      this.alive = true;
    });

    this.socket.on('connect', () => {
      this.alive = true;
    });
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
