import { Component, OnInit } from '@angular/core';
import { LISTS } from 'src/app/data/lists';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public LISTS = LISTS;

  constructor() { }

  public ngOnInit(): void {
  }
}
