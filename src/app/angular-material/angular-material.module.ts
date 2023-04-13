import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

const modules = [
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatDividerModule
];

@NgModule({
  declarations: [],
  imports: [
    modules,
    CommonModule
  ],
  exports: [
    modules
  ]
})
export class AngularMaterialModule { }