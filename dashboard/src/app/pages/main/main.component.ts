import { Component, OnInit, ViewChild } from '@angular/core';
import { CommandsListComponent } from 'src/app/components/commands-list/commands-list.component';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { SocketService } from 'src/app/services/socket.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('commands', {static: true})
  commands: CommandsListComponent;

  botStatusSocket: Observable<any>;
  botUrl: string;
  botName: string;

  constructor(
    private auth: AuthService,
    private httpService: HttpService,
    private socketService: SocketService
  ) { }

  ngOnInit(): void {
    this.socketService.setup();

    if (!this.botStatusSocket) {
      this.botStatusSocket = this.socketService.subscribe('bot-status');
      this.botStatusSocket.subscribe(info => {
        this.socketCases(info);
      });
    }
  }

  startBot() {
    this.httpService.post('start', {
      name: this.botName,
      url: this.botUrl,
      commands: this.commands.selectedCommands()
    });
  }

  socketCases(info) {
    switch (info) {
      case 'connecting':
        break;

      case 'live':
        break;

      case 'wrong-url':
        break;

      case 'error':
        break;

      case 'bot-info':
        break;

      case 'setup-mic':
        break;

      case 'setup-mic-done':
        break;
    }
  }
}
