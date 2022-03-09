import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/Order';
import { OrderRows } from '../models/OrderRows';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders = new Subject<Order[]>();
  orders$ = this.orders.asObservable();
  //ta bort
  cartList: Product[] = [];

  constructor(private http: HttpClient) { }


  _postOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(environment.ordersUrl, order);

    // const httpHeaders = new HttpHeaders();
    // httpHeaders.append('', 'aplication/json');
    // return this.http.post<Order>(environment.ordersUrl, order, { headers: httpHeaders })
  }

  _getOrders(): void {
    this.http.get<Order[]>(environment.ordersUrl + '?CompanyId=36')
      .subscribe((data: Order[]) => {
        console.log(this.orders.next(data));
      })
  }

  _deleteOrders(id: number): Observable<Order> {
    return this.http.delete<Order>(environment.ordersUrl + id);
  }
}
