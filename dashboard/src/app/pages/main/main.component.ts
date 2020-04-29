import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuComponent } from 'src/app/components/menu/menu.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('menu', {static: true})
  menu: MenuComponent;

  constructor() { }

  ngOnInit(): void {
    console.log('init')
  }

}
