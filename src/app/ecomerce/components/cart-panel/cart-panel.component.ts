import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IItemCart } from '../../interfaces/ecommer.interface';

@Component({
  selector: 'app-cart-panel',
  templateUrl: './cart-panel.component.html',
  styleUrls: ['./cart-panel.component.scss']
})
export class CartPanelComponent implements OnInit {
 @Input() itemsCart: IItemCart[] = [];
 @Output() checkout: EventEmitter<void> = new EventEmitter<void>();
 @Output() delete: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
