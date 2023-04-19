import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICart, IItem, IItemCart } from '../interfaces/ecommer.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = 'https://fakestoreapi.com';

  constructor(
    private readonly http: HttpClient
  ) { }

  getProducts(): Observable<IItem[]> {
    return this.http.get<IItem[]>(`${this.apiUrl}/products`, { params: { limit: 5}});
  }

  addCart(cart: ICart): Observable<ICart> {
    return this.http.post<any>(`${this.apiUrl}/carts`, cart);
  }

  updateCart(cartId: string, editedCart: ICart): Observable<ICart> {
    return this.http.put<any>(`${this.apiUrl}/carts/${cartId}`, editedCart);
  }

  deleteCart(cartId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/carts/${cartId}`);
  }
}
