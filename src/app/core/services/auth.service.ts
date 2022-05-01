import { Injectable } from '@angular/core';

import { USERS } from 'src/app/data';
import { Login, User } from '../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public USERS = USERS;

  public user: User | null = null;

  public get isAuth(): boolean {
    return !!this.user;
  }

  constructor() { }

  public login({ username, password }: Login): boolean {
    const user = this.USERS
      .find(user => user.username === username && user.password === password);

    if (user) {
      this.user = user;
    }

    return this.isAuth;
  }
}
