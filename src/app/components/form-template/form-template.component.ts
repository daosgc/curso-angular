import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/modelo/producto.interface';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss']
})
export class FormTemplateComponent implements OnInit {
  product: IProduct = {
    id: 0,
    name: '',
    price: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log('this.product', form.value);
  }

}
