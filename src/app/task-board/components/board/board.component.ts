import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { LISTS } from 'src/app/data/lists';
import { Item } from '../../../shared/models';
import { USERS } from '../../../data';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public LISTS = LISTS;
  public USERS = USERS;

  public addListDialogVisible = false;
  public listIdToAddingItem: number | null = null;

  public newListTitle = new FormControl('', [Validators.required]);
  public newItemForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    assignTo: new FormControl('', [Validators.required]),
  });

  public get newItem(): Partial<Item> {
    return this.newItemForm.value;
  }

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

  public openAddItemDialog(listId: number): void {
    this.listIdToAddingItem = listId;
  }

  public closeAddItemDialog(canceled: boolean): void {
    if (!canceled) {
      const list = this.LISTS.find(list => list.id === this.listIdToAddingItem);

      list?.items.push({
        ...this.newItem,
        id: list.items.length + 1,
      } as Item);
    }

    this.newItemForm.reset();
    this.listIdToAddingItem = null;
  }
}
