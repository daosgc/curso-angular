import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsDashboardComponent } from './components/items-dashboard/items-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcomerceRoutingModule { }
