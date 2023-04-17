import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }

  getData(): any[] {
    return [
      {
        id: 0,
        name: 'Producto Nuevo',
        price: 20
      }
    ];
  }
}
