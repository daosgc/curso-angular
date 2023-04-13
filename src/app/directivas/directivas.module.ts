import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResaltarDirective } from './resaltar/resaltar.directive';

@NgModule({
  declarations: [ResaltarDirective],
  imports: [
    CommonModule
  ],
  exports: [ResaltarDirective]
})
export class DirectivasModule { }
