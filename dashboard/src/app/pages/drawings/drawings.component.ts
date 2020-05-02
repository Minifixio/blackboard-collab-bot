import { Component, OnInit } from '@angular/core';
import { Drawing } from 'src/app/models/Drawing';
import { HttpService } from 'src/app/services/http.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-drawings',
  templateUrl: './drawings.component.html',
  styleUrls: ['./drawings.component.scss']
})
export class DrawingsComponent implements OnInit {

  drawings: Drawing[];
  cols = 0;

  constructor(
    private httpService: HttpService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.httpService.get('drawings').toPromise().then(drawings => {
      this.drawings = drawings;
      this.cols = Math.round(Math.sqrt(this.drawings.length));
    });
  }

  async draw(name) {
    const drawingRes = await this.httpService.post('draw', {name}).toPromise();

    if (!drawingRes) {
      this.toastService.showToast('Erreur, le BOT ne peut pas dessiner. Le dessin n\'est pas activé sur la page', 6000);
    }
  }

  getUrl(name) {
    return `http://localhost:3000/static/drawings/svg/${name}.svg`
  }
}
