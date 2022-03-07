import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../models/IProduct';
import { Order } from '../models/Order';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders = new Subject<Order[]>();
  orders$ = this.orders.asObservable();
  cartList: Product[] = [];

  constructor(private http: HttpClient) { }

  _postOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(environment.ordersUrl, order)
  }

  _getOrders(): void {
    this.http.get<Order[]>(environment.productsUrl + '?companyId=36')
      .subscribe((data: Order[]) => {
        console.log(this.orders.next(data));
      })
  }
}
