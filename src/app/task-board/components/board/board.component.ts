import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { LISTS } from 'src/app/data/lists';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public LISTS = LISTS;

  public addListDialogVisible = false;

  public newListTitle = new FormControl('', [Validators.required]);

  constructor() { }

  public ngOnInit(): void {
  }

  public openAddListDialog(): void {
    this.addListDialogVisible = true;
  }

  public closeAddListDialog(canceled: boolean): void {
    if (!canceled) {
      this.LISTS.push({
        id: this.LISTS.length + 1,
        title: this.newListTitle.value,
        items: [],
      });
    }

    this.newListTitle.reset();
    this.addListDialogVisible = false;
  }
}
