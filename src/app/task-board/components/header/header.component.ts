import { Component } from '@angular/core';

import { AuthService } from '../../../core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public get username(): string {
    return this.authService.user?.username || '';
  }
  constructor(
    private readonly authService: AuthService,
  ) { }
}
