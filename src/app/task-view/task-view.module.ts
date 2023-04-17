import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskViewRoutingModule } from './task-view-routing.module';
import { ComponentsModule } from '../components/components.module';
import { UtilsService } from '../services/utils.service';
import { TasksService } from './services/tasks.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    TaskViewRoutingModule
  ],
  providers: [
    { provide: UtilsService, useClass: TasksService }
  ]
})
export class TaskViewModule { }
