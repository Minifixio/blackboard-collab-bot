import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Observable } from 'rxjs';
import { Sound } from 'src/app/models/Sound';

@Component({
  selector: 'app-soundboard',
  templateUrl: './soundboard.component.html',
  styleUrls: ['./soundboard.component.scss']
})
export class SoundboardComponent implements OnInit {

  sounds: Sound[];
  cols = 0;

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.httpService.get('sounds').toPromise().then(sounds => {
      this.sounds = sounds;
      let tests = this.sounds
      this.cols = Math.round(Math.sqrt(this.sounds.length));
    });
  }

}
