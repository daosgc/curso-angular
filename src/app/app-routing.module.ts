import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProductComponent } from './components/new-product/new-product.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginFormComponent } from './components/login-form/login-form.component';

const routes: Routes = [
  {
    path: 'products',
    component: NewProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'tasks',
    loadChildren: () => import('./task-view/task-view.module').then((m) => m.TaskViewModule),
  },
  {
    path: 'store',
    loadChildren: () => import('./ecomerce/ecomerce.module').then((m) => m.EcomerceModule)
  },
  {
    redirectTo: 'store',
    pathMatch: 'full',
    path: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
