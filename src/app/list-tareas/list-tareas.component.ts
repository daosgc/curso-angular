import { Component, OnInit } from '@angular/core';
import { ITask } from '../modelo/tarea.interface';

@Component({
  selector: 'app-list-tareas',
  templateUrl: './list-tareas.component.html',
  styleUrls: ['./list-tareas.component.scss']
})
export class ListTareasComponent implements OnInit {
  tarea: string = '';
  listaTareas: string[] = ['Primera Tarea'];

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.listaTareas.push(this.tarea);
    this.tarea = '';
  }

}
