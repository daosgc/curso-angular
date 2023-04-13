import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { ITask } from '../../modelo/tarea.interface';
import { TransformarKey } from '../../constantes/constantes.const';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, OnDestroy, OnChanges {
  @Input() tarea: ITask;
  @Output() remove = new EventEmitter<number>();
  transformarMin = TransformarKey.min;
  transformarMay = TransformarKey.may;

  constructor() {
    this.tarea = {id: 0, name: '', visible: false};
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  onRemove(): void {
    this.remove.emit(this.tarea.id);
  }
}
