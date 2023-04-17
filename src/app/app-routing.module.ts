import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProductComponent } from './components/new-product/new-product.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'products',
    component: NewProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tasks',
    loadChildren: () => import('./task-view/task-view.module').then((m) => m.TaskViewModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
