import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  apiUrl = environment.apiUrl;
  socket: any;
  alive = true;

  constructor() { }

  setup() {
    this.socket = io(this.apiUrl);
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
