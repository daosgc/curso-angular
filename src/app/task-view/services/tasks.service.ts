import { Injectable } from '@angular/core';
import { ITask } from 'src/app/modelo/tarea.interface';
import { UtilsService } from 'src/app/services/utils.service';

@Injectable()
export class TasksService implements UtilsService {

  constructor() { }

  getData(): ITask[] {
    return [
      {
        id: 0,
        name: 'Tarea1',
        visible: true
      }
    ];
  }
}
