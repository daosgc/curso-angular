import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivasModule } from '../directivas/directivas.module';
import { PipesModule } from '../pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListTareasComponent } from './list-tareas/list-tareas.component';
import { TaskComponent } from './task/task.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormTemplateComponent } from './form-template/form-template.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { ProductsTableComponent } from './products-table/products-table.component';
import { NewProductComponent } from './new-product/new-product.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    ListTareasComponent,
    TaskComponent,
    FormTemplateComponent,
    FormReactiveComponent,
    ProductsTableComponent,
    NewProductComponent,
    LoginFormComponent,
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivasModule,
    PipesModule,
  ],
  exports: [
    ListTareasComponent,
    TaskComponent,
    FormTemplateComponent,
    FormReactiveComponent,
    ProductsTableComponent,
    NewProductComponent,
    LoginFormComponent
  ]
})
export class ComponentsModule { }
