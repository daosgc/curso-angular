import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/modelo/producto.interface';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  @Input() tableData: IProduct[] = [];
  @Output() editAction: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  readonly columns: Array<string> = ['id', 'name', 'price', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(selectedProduct: IProduct) {
    this.editAction.emit(selectedProduct);
  }

  onDelete(selectedProduct: IProduct) {
    this.tableData = this.tableData.filter((p: IProduct) => p.id !== selectedProduct.id);
  }

}
