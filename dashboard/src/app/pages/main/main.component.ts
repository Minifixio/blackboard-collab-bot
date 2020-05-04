import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { CommandsListComponent } from 'src/app/components/commands-list/commands-list.component';
import { HttpService } from 'src/app/services/http.service';
import { SocketService } from 'src/app/services/socket.service';
import { Observable } from 'rxjs';
import { Bot } from 'src/app/models/Bot';
import { ToastService } from 'src/app/services/toast.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

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
  screenshotUrl: string;

  botNameInput: string;
  botUrlInput = 'http://collaborate.blackboard.com/go?CTID=d83e9915-9912-42a5-b54f-289b3e310135G'//: string;

  constructor(
    private httpService: HttpService,
    private socketService: SocketService,
    private toastService: ToastService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.socketService.setup();

    this.httpService.get('bot').toPromise().then(bot => {
      if (bot) {
        this.currentBot = bot;
        this.connected = this.currentBot.connected;
        this.screenshot();
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

      this.loading = true;
      const started = await this.httpService.post('start', this.currentBot).toPromise();

      if (!started) {
        this.loading = false;
        this.currentBot = null;
        this.toastService.showToast('Erreur lors de la connexion avec le BOT', 6000);
      }
    }
  }

  async disconnectBot() {
    await this.httpService.get('disconnect').toPromise().then(res => console.log(res));
    this.currentBot = null;
  }

  async sendText() {
    const res = await this.httpService.post('text', {
      message: this.botTextarea
    }).toPromise();

    if (res) {
      this.toastService.showToast('Le message a bien été envoyé !', 5000);
    } else {
      this.toastService.showToast('Le BOT ne peut pas accéder au chat', 6000);
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
    const url = environment.apiUrl + '/static/screenshot/screenshot.png';
    const timeStamp = new Date().getTime();
    await this.httpService.get('screenshot').toPromise();
    this.screenshotUrl = url + '?' + timeStamp;
  }

  async clickPage(event) {
    const boundingBox = document.getElementById('bot-screenshot-img').getBoundingClientRect();
    const xPos = event.x - boundingBox.x;
    const yPos = event.y - boundingBox.y;
    const xRatio = xPos / boundingBox.width;
    const yRatio = (yPos / boundingBox.height) * 0.55;
    console.log('click');
    await this.httpService.post('click', {x: xRatio, y: yRatio}).toPromise();
    this.screenshot();
  }

  onKeydown(event) {
    if (event.key === 'Enter') {
      this.startBot();
    }
  }

  socketCases(info) {
    switch (info.message) {
      case 'connecting':
        this.loading = false;
        this.connected = false;
        this.screenshot();
        this.connectionMessage = 'Connexion en cours';
        break;

      case 'live':
        this.loading = false;
        this.connected = true;
        break;

      case 'wrong-url':
        this.currentBot = null;
        this.toastService.showToast('L\'URL n\'est pas bonne !', 6000);
        break;

      case 'error':
        break;

      case 'skipping-test':
        this.loading = false;
        this.connected = false;
        this.screenshot();
        this.connectionMessage = 'Le bot passe la page de test';
        break;

      case 'bot-infos':
        this.currentBot = info;
        this.screenshot();
        break;

      case 'setup-mic':
        this.loading = false;
        this.connected = false;
        this.screenshot();
        this.connectionMessage = 'Le bot accède au micro';
        break;

      case 'setup-mic-error':
        this.screenshot();
        this.openMicDialog(info.content);
        break;

      case 'mic-selection':
        this.connectionMessage = 'Le bot doit choisir une source micro';
        this.screenshot();
        break;

      case 'video-setup-done':
        this.connectionMessage = 'Le bot passe l\'accès à la caméra';
        this.screenshot();
        break;

      case 'mic-selection-done':
        this.connectionMessage = 'Le bot a choisi la source micro';
        this.screenshot();
        break;

      case 'chat-not-available':
        this.toastService.showToast('Le BOT ne peut pas accéder au chat', 6000);
        this.screenshot();
        break;

      case 'setup-mic-done':
        this.loading = false;
        this.connected = false;
        this.screenshot();
        this.connectionMessage = 'Micro mis en place';
        break;
    }
  }

  async openMicDialog(audioDevices) {
    const dialogRef = this.dialog.open(DialogMicSelection, {
      width: 'fit-content',
      data: audioDevices
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      console.log('selected index', result);

      if (result) {
        this.dialog.closeAll();
        await this.httpService.post('mic-option', {index: result}).toPromise();
      }

    });
  }
}


@Component({
  selector: 'dialog-mic-selection',
  templateUrl: 'dialog-mic-selection.html',
  styleUrls: ['./main.component.scss']
})
export class DialogMicSelection {

  constructor(
    public dialogRef: MatDialogRef<DialogMicSelection>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(res): void {
    this.dialogRef.close(res);
  }
}