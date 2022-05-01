import { Injectable } from '@angular/core';

import { List, User } from '../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public readUser(): User | null {
    return JSON.parse(localStorage.getItem('user') || '') || null;
  }

  public saveUser(user: User | null): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public readLists(): List[] | null {
    const data = localStorage.getItem('lists');
    return data ? JSON.parse(data) : null;
  }

  public saveLists(lists: List[]): void {
    localStorage.setItem('lists', JSON.stringify(lists));
  }
}
