import { Component, OnInit } from '@angular/core';
import { ITask } from '../../modelo/tarea.interface';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-list-tareas',
  templateUrl: './list-tareas.component.html',
  styleUrls: ['./list-tareas.component.scss']
})
export class ListTareasComponent implements OnInit {
  tarea: ITask;
  listaTareas: ITask[] = [];

  constructor(
    private readonly utils: UtilsService
  ) {
    this.tarea = {
      id: 0,
      name: '',
      visible: true,
    };
    console.log('tareas', this.utils.getData());
  }

  ngOnInit(): void {}

  onSubmit() {
    this.tarea = {
      ...this.tarea,
      id: Math.floor((Math.random() * (100 - 0 + 1)) + 0),
      visible: this.tarea.name.includes('tarea'),
      date: new Date().valueOf()
    };

    this.listaTareas.push(this.tarea);
    this.tarea = {
      id: 0,
      name: '',
      visible: true
    };
    console.log('this.listaTareas', this.listaTareas);
  }

  onRemoveAction(id: number) {
    this.listaTareas = this.listaTareas.filter((t: ITask) => t.id !== id);
  }
}
