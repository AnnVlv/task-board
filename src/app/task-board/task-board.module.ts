import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CascadeSelectModule } from 'primeng/cascadeselect';

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
    DialogModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    CascadeSelectModule,
  ]
})
export class TaskBoardModule { }
