import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

import { TaskBoardRoutingModule } from './task-board-routing.module';
import { TaskBoardComponent } from './task-board.component';
import { HeaderComponent } from './components/header/header.component';
import { BoardComponent } from './components/board/board.component';

@NgModule({
  declarations: [
    TaskBoardComponent,
    HeaderComponent,
    BoardComponent,
  ],
  imports: [
    CommonModule,
    TaskBoardRoutingModule,
    ButtonModule,
    ToolbarModule,
  ]
})
export class TaskBoardModule { }
