import { Component, OnInit, ViewChild } from '@angular/core';
import { CommandsListComponent } from 'src/app/components/commands-list/commands-list.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('commands-list', {static: true})
  menu: CommandsListComponent;

  constructor() { }

  ngOnInit(): void {
    console.log('init')
  }

}
