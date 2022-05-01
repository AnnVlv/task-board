import { Injectable, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { StorageService } from './storage.service';
import { LISTS } from '../../data/lists';
import { List } from '../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class ListsService implements OnDestroy {
  public lists: List[] = [];
  public listsWasUpdated$ = new Subject<void>();

  private destroy$ = new Subject<void>();

  constructor(private readonly storageService: StorageService) { }

  public init(): void {
    this.lists = this.storageService.readLists() || LISTS;

    this.listsWasUpdated$.pipe(
      takeUntil(this.destroy$),
    ).subscribe(() => {
      this.storageService.saveLists(this.lists);
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
