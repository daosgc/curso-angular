import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ICart, IItem, IItemCart, IProductCart } from '../../interfaces/ecommer.interface';
import { Observable, Subject, forkJoin, map, of, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-items-dashboard',
  templateUrl: './items-dashboard.component.html',
  styleUrls: ['./items-dashboard.component.scss']
})
export class ItemsDashboardComponent implements OnInit, OnDestroy {
   items$: Observable<IItem[]> = this.api.getProducts();
   showCartPanel = false;
   itemsCart: IItemCart[] = [];
   readonly destroy$ = new Subject<void>();

  constructor(
    private readonly api: ApiService,
  ) { }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onAddItemCart(newItem: IItemCart) {
    this.itemsCart.push(newItem);
  }

  openCartPanel() {
    this.showCartPanel = !this.showCartPanel;
  }

  onCheckout() {
    const products: IProductCart[] = this.itemsCart.map((i: IItemCart) => {
      return { productId: parseInt(i.productId), quantity: i.quantity };
    })
    const payloadCart: ICart = {
      userId: 5,
      date: new Date().toString(),
      products: products
    };
    this.api.addCart(payloadCart).pipe(takeUntil(this.destroy$)).subscribe({
      next: (resp) => {
        console.log('on success', resp);
        this.itemsCart = [];
      },
      error: (err) => {
        console.log('on error', err);
      }
    });
  }

  onDelete() {
    this.api.deleteCart('5').pipe(takeUntil(this.destroy$)).subscribe({
      next: (resp) => {
        console.log('on success', resp);
        this.itemsCart = [];
      },
      error: (err) => {
        console.log('on error', err);
      }
    });
  }

  // private exampleObs() {
  //   forkJoin([of('uno'), of('dos')]).pipe(map((data) => data[0]), switchMap((resp1) => of(resp1 + '+tres'))).subscribe((data) => console.log('resp final', data));
  // }
}
