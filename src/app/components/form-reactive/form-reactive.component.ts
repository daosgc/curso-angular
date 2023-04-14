import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/modelo/producto.interface';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnChanges {
  @Input() product: IProduct;
  @Input() editMode: boolean;
  @Output() save: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  productForm: FormGroup;

  constructor(private fm: FormBuilder) {
    this.productForm =  this.initForm();
    this.product = { id: 0, name: '', price: 0};
    this.editMode = false;
  }

  ngOnChanges(): void {
    this.productForm =  this.initForm();
  }

  onSubmit() {
    const newProduct: IProduct = {
      id: this.product?.id || Math.floor((Math.random() * (100 - 0 + 1)) + 0),
      name: this.productForm.value.name,
      price: this.productForm.value.price,
    }
    this.save.emit(newProduct);
    this.productForm.reset();
  }

  onCancel() {
    this.cancel.emit();
  }

  private initForm(): FormGroup {
    return this.fm.group({
      name: [this.product?.name, [Validators.required, Validators.minLength(5)]],
      price: [this.product?.price, Validators.required],
    });
  }

}
