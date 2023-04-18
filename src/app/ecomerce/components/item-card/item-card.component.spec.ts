import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardComponent } from './item-card.component';
import { IItem, IItemCart } from '../../interfaces/ecommer.interface';

describe('ItemCardComponent', () => {
  let component: ItemCardComponent;
  let fixture: ComponentFixture<ItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init with one the totalProducts', () => {
    expect(component.totalProducts).toEqual(1);
  });

  it('should emit the itemCart with the correct format', () => {
    spyOn(component.addItem, 'emit');
    const itemCartMock: IItemCart = {
      productTitle: 'Test',
      productId: '10',
      totalPrice: 5,
      quantity: 1
    };
    const itemMock: Partial<IItem> = {
      id:          10,
      title:       'Test',
      price:       5,
    };
    component.item =  itemMock as IItem;
    component.onAddItem();
    expect(component.addItem.emit).toHaveBeenCalledWith(itemCartMock);
  });
});
