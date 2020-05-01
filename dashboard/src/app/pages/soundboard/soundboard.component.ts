import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Observable } from 'rxjs';
import { Sound } from 'src/app/models/Sound';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-soundboard',
  templateUrl: './soundboard.component.html',
  styleUrls: ['./soundboard.component.scss']
})
export class SoundboardComponent implements OnInit {

  sounds: Sound[];
  cols = 0;

  constructor(
    private httpService: HttpService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.httpService.get('sounds').toPromise().then(sounds => {
      this.sounds = sounds;
      this.cols = Math.round(Math.sqrt(this.sounds.length));
    });
  }

  async playSound(name) {
    const res = await this.httpService.post('sound', {name}).toPromise();

    if (!res) {
      this.toastService.showToast('Aucun BOT connecté pour le moment...', 5000)
    }
  }

}
