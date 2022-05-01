import { Component, OnInit } from '@angular/core';

import { LISTS } from '../data/lists';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit {
  public LISTS = LISTS;

  constructor() { }

  ngOnInit(): void {
  }
}
