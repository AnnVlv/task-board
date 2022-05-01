import { Injectable } from '@angular/core';

import { USERS } from 'src/app/data';
import { Login, User } from '../../shared/models';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public USERS = USERS;

  public user: User | null = null;

  public get isAuth(): boolean {
    return !!this.user;
  }

  constructor(private readonly storageService: StorageService) { }

  public init(): void {
    this.user = this.storageService.readUser();
  }

  public login({ username, password }: Login): boolean {
    const user = this.USERS
      .find(user => user.username === username && user.password === password);

    if (user) {
      this.user = user;
      this.storageService.saveUser(user);
    }

    return this.isAuth;
  }

  public logout(): void {
    this.user = null;
    this.storageService.saveUser(this.user);
  }
}
