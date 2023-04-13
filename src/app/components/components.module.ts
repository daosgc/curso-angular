import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivasModule } from '../directivas/directivas.module';
import { PipesModule } from '../pipes/pipes.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ListTareasComponent } from './list-tareas/list-tareas.component';
import { TaskComponent } from './task/task.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [
    ListTareasComponent,
    TaskComponent,
  ],
  imports: [
    AngularMaterialModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    DirectivasModule,
    PipesModule,
  ],
  exports: [
    ListTareasComponent,
    TaskComponent,
  ]
})
export class ComponentsModule { }
