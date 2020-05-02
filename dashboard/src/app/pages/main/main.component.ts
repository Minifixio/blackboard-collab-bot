import { Component, OnInit, ViewChild } from '@angular/core';
import { CommandsListComponent } from 'src/app/components/commands-list/commands-list.component';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { SocketService } from 'src/app/services/socket.service';
import { Observable } from 'rxjs';
import { Bot } from 'src/app/models/Bot';
import { ToastService } from 'src/app/services/toast.service';

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
  connectionMessage: string;

  botTextarea: string;
  screenshotUrl = 'http://localhost:3000/static/screenshot/screenshot.png';

  botNameInput: string;
  botUrlInput = 'http://collaborate.blackboard.com/go?CTID=d83e9915-9912-42a5-b54f-289b3e310135G'//: string;

  constructor(
    private auth: AuthService,
    private httpService: HttpService,
    private socketService: SocketService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.socketService.setup();

    this.httpService.get('bot').toPromise().then(bot => {
      if (bot) {
        this.currentBot = bot;
        this.connected = this.currentBot.connected;
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

    if (!this.botNameInput || !(this.botUrlInput.includes('bbcollab.com') || this.botUrlInput.includes('blackboard'))) {
      this.toastService.showToast('Veuillez remplir les champs correctement avant!', 5000);
    } else {

      this.currentBot = {
        name: this.botNameInput,
        url: this.botUrlInput,
        commands: this.commands.selectedCommands(),
        connected: true
      };

      await this.httpService.post('start', this.currentBot).toPromise();

      this.loading = true;
    }
  }

  async disconnectBot() {
    await this.httpService.get('disconnect');
    this.currentBot = null;
  }

  async sendText() {
    const res = await this.httpService.post('text', {
      message: this.botTextarea
    }).toPromise();

    if (res) {
      this.toastService.showToast('Le message a bien été envoyé !', 5000)
    }
  }

  async sendVoice() {
    const res = await this.httpService.post('speak', {
      message: this.botTextarea,
      username: this.currentBot.name
    }).toPromise();

    if (res) {
      this.toastService.showToast('Le message a bien été envoyé !', 5000);
    }
  }

  async screenshot() {
    await this.httpService.get('screenshot').toPromise();
  }

  getScreenshot() {
    const timeStamp = new Date().getTime();
    return this.screenshotUrl + '?' + timeStamp;
  }

  socketCases(info) {
    switch (info) {
      case 'connecting':
        this.loading = false;
        this.connected = false;
        this.connectionMessage = 'Connexion en cours';
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
        this.connectionMessage = 'Le bot accède au micro';
        break;

      case 'setup-mic-done':
        this.loading = false;
        this.connected = false;
        this.connectionMessage = 'Micro mis en place';
        break;
    }
  }
}
