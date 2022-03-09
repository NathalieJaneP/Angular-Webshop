import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  orders: Order[] = [];
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.orders$.subscribe((data => {
      this.orders = data;
    }));
    this.orderService._getOrders();
  }
  deleteOrders(id: any): void {
    this.orderService._deleteOrders(id).subscribe((data) => {
      console.log(data);
      this.orderService._getOrders();
    })
  }
}
