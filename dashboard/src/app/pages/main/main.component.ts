import { Component, OnInit, ViewChild } from '@angular/core';
import { CommandsListComponent } from 'src/app/components/commands-list/commands-list.component';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { SocketService } from 'src/app/services/socket.service';
import { Observable } from 'rxjs';
import { Bot } from 'src/app/models/Bot';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('commands')
  commands: CommandsListComponent;

  botStatusSocket: Observable<any>;
  currentBot: Bot;

  loading = false;
  connected = false;

  botUrlInput: string;
  botNameInput: string;

  constructor(
    private auth: AuthService,
    private httpService: HttpService,
    private socketService: SocketService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.socketService.setup();

    this.httpService.get('bot').toPromise().then(bot => {
      console.log(bot)
      if (bot) {
        this.currentBot = bot;
      }
    });

    if (!this.botStatusSocket) {
      this.botStatusSocket = this.socketService.subscribe('bot-status');
      this.botStatusSocket.subscribe(info => {
        this.socketCases(info);
      });
    }
  }

  async startBot() {

    if (!this.botName || this.botUrl.includes('bbcollab.com')) {
      this.showToastError('Veuillez remplir les champs correctement avant!');
    } else {

      this.currentBot = {
        name: this.botName,
        url: this.botUrl,
        commands: this.commands.selectedCommands()
      };

      await this.httpService.post('start', this.currentBot).toPromise();

      this.loading = true;
    }
  }

  disconnectBot() {

  }

  showToastError(message: string) {
    this.snackBar.open(message, null, {
      duration: 5000
    });
  }

  socketCases(info) {
    console.log(info);
    switch (info) {
      case 'connecting':
        this.loading = false;
        this.connected = false;
        break;

      case 'live':
        this.loading = false;
        this.connected = true;
        break;

      case 'wrong-url':
        break;

      case 'error':
        break;

      case 'bot-infos':
        this.currentBot = info;
        break;

      case 'setup-mic':
        this.loading = false;
        this.connected = false;
        break;

      case 'setup-mic-done':
        this.loading = false;
        this.connected = false;
        break;
    }
  }
}
