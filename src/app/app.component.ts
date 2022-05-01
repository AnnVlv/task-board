import { Component, OnInit } from '@angular/core';

import { AuthService, ListsService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly listsService: ListsService,
  ) { }

  public ngOnInit(): void {
    this.authService.init();
    this.listsService.init();
  }
}
