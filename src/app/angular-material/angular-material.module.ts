import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';

const modules = [
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatDividerModule,
  MatTableModule,
  MatCardModule,
  MatGridListModule,
  MatToolbarModule,
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
