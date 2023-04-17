import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTareasComponent } from '../components/list-tareas/list-tareas.component';
import { TasksGuard } from '../guards/tasks.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [TasksGuard],
    children: [
      {
        path: 'list',
        component: ListTareasComponent,
      }
    ]
  },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'list'
  // }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TaskViewRoutingModule { }
