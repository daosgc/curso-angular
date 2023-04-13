import { Pipe, PipeTransform } from '@angular/core';
import { TransformarKey } from '../../constantes/constantes.const';

@Pipe({
  name: 'transformarTxt'
})
export class TransformarTxtPipe implements PipeTransform {

  transform(value: string, tipo: string): string {
      if (tipo === TransformarKey.may) {
        return value.toLocaleUpperCase();
      } else if (tipo === TransformarKey.min) {
        return value.toLocaleLowerCase();
      }
    return value;
  }

}
