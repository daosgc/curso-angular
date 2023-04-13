import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformarTxtPipe } from './transformar-txt/transformar-txt.pipe';

@NgModule({
  declarations: [TransformarTxtPipe],
  imports: [
    CommonModule
  ],
  exports: [TransformarTxtPipe]
})
export class PipesModule { }
