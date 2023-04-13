import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTareasComponent } from './list-tareas/list-tareas.component';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';
import { PipesModule } from './pipes/pipes.module';
import { DirectivasModule } from './directivas/directivas.module';

@NgModule({
  declarations: [
    AppComponent,
    ListTareasComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DirectivasModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
