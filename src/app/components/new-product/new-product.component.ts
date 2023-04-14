import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/modelo/producto.interface';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  productos: IProduct[] = [];
  isNew = false;
  editMode = false;
  editedProduct: IProduct = { id: 0, name: '', price: 0};

  constructor() { }

  ngOnInit(): void {
  }

  onSave(product: IProduct) {
    if (this.editMode) {
      this.productos = this.productos.map((p: IProduct) => {
        if (p.id === product.id) {
          return product;
        }
        return p;
      });
    } else {
      this.productos = this.productos.concat(product);
    }
    this.editMode = false;
  }

  showForm() {
    this.isNew = true;
  }

  onCancel() {
    this.isNew = false;
    this.editedProduct = { id: 0, name: '', price: 0};
  }

  onEditProduct(selectProduct: IProduct) {
    this.editMode = true;
    console.log('selectProduct', selectProduct);
    this.editedProduct = {...selectProduct};
  }

}
