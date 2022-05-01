import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subject, takeUntil } from 'rxjs';

import { AuthService } from '../../../core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public date$ = new Subject<Date>();

  private destroy$ = new Subject<void>();

  public get username(): string {
    return this.authService.user?.username || '';
  }

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) { }

  public ngOnInit(): void {
    interval(60).pipe(
      takeUntil(this.destroy$),
    ).subscribe(() => {
      this.date$.next(new Date());
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
