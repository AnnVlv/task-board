import { Injectable } from '@angular/core';

import { User } from '../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public readUser(): User | null {
    return JSON.parse(localStorage.getItem('user') || '') || null;
  }

  public saveUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }
}
