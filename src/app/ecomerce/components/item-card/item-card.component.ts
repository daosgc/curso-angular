import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IItem, IItemCart } from '../../interfaces/ecommer.interface';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() item: IItem | null = null;
  @Output() addItem: EventEmitter<IItemCart> = new EventEmitter<IItemCart>();
  totalProducts = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const price = this.item?.price ? this.item?.price : 0;
    const newItemCart: IItemCart = {
      productTitle: this.item?.title as string,
      productId: `${this.item?.id as number}`,
      totalPrice: this.totalProducts * price,
      quantity: this.totalProducts
    }
    this.addItem.emit(newItemCart);
  }

}
