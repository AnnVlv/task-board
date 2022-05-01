import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { TaskBoardRoutingModule } from './task-board-routing.module';
import { TaskBoardComponent } from './task-board.component';
import { HeaderComponent } from './components/header/header.component';
import { ToolbarModule } from "primeng/toolbar";

@NgModule({
  declarations: [
    TaskBoardComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    TaskBoardRoutingModule,
    ButtonModule,
    ToolbarModule
  ]
})
export class TaskBoardModule { }
