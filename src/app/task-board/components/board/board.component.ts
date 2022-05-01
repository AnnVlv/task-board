import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Item, List } from '../../../shared/models';
import { USERS } from '../../../data';
import { ListsService } from '../../../core/services';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public USERS = USERS;

  public addListDialogVisible = false;
  public listIdToAddingItem: number | null = null;

  public newListTitle = new FormControl('', [Validators.required]);
  public newItemForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    assignTo: new FormControl('', [Validators.required]),
  });

  public get lists(): List[] {
    return this.listsService.lists;
  }

  public get newItem(): Partial<Item> {
    return this.newItemForm.value;
  }

  constructor(private readonly listsService: ListsService) { }

  public ngOnInit(): void {
  }

  public openAddListDialog(): void {
    this.addListDialogVisible = true;
  }

  public closeAddListDialog(canceled: boolean): void {
    if (!canceled) {
      this.lists.push({
        id: this.lists.length + 1,
        title: this.newListTitle.value,
        items: [],
      });

      this.listsService.listsWasUpdated$.next();
    }

    this.newListTitle.reset();
    this.addListDialogVisible = false;
  }

  public openAddItemDialog(listId: number): void {
    this.listIdToAddingItem = listId;
  }

  public closeAddItemDialog(canceled: boolean): void {
    if (!canceled) {
      const list = this.lists.find(list => list.id === this.listIdToAddingItem);

      list?.items.push({
        ...this.newItem,
        id: list.items.length + 1,
      } as Item);

      this.listsService.listsWasUpdated$.next();
    }

    this.newItemForm.reset();
    this.listIdToAddingItem = null;
  }
}
