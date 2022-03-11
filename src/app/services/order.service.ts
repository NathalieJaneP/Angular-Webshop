import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders = new Subject<Order[]>();
  orders$ = this.orders.asObservable();

  constructor(private http: HttpClient) { }

  postOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(environment.ordersUrl, order);
  }

  getOrders(): void {
    this.http.get<Order[]>(environment.ordersUrl + '?CompanyId=36')
      .subscribe((data: Order[]) => {
        console.log(this.orders.next(data));
      })
  }

  deleteOrders(id: number): Observable<Order> {
    return this.http.delete<Order>(environment.ordersUrl + id);
  }
}