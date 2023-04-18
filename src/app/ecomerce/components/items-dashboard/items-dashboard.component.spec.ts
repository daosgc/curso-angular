import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ItemsDashboardComponent } from './items-dashboard.component';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { ICart, IItemCart } from '../../interfaces/ecommer.interface';

const itemCartMock: IItemCart = {
  productTitle: 'productTitle',
  productId: 'productId',
  totalPrice: 10,
  quantity: 0
};

const payloadCart: ICart = {
  userId: 5,
  date: new Date().toString(),
  products: [
    {
      productId: parseInt(itemCartMock.productId),
      quantity: itemCartMock.quantity
    }
  ]
};

describe('ItemsDashboardComponent', () => {
  let component: ItemsDashboardComponent;
  let fixture: ComponentFixture<ItemsDashboardComponent>;
  let apiSpy = jasmine.createSpyObj<ApiService>('ApiService', {
    getProducts: of([]),
    addCart: of(payloadCart),
    deleteCart: of(void 0)
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ItemsDashboardComponent ],
      providers: [
        { provide: ApiService, useValue: apiSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a item to cart', () => {
    const itemCartMock: IItemCart = {
      productTitle: 'productTitle',
      productId: 'productId',
      totalPrice: 10,
      quantity: 0
    };
    component.onAddItemCart(itemCartMock)
    expect(component.itemsCart).toEqual([itemCartMock]);
    expect(component.itemsCart.length).toEqual(1);
  });

  it('should open the cart panel', () => {
    expect(component.showCartPanel).toBeFalsy();
    component.openCartPanel();
    expect(component.showCartPanel).toBeTruthy();
  });

  it('should call addCart from api service', fakeAsync(() => {
    component.onAddItemCart(itemCartMock)
    component.onCheckout();
    tick();
    expect(apiSpy.addCart).toHaveBeenCalledWith(payloadCart);
  }));

  it('should call deleteCart from api service', fakeAsync(() => {
    component.onDelete();
    tick();
    expect(apiSpy.deleteCart).toHaveBeenCalledWith('5');
  }));
});
