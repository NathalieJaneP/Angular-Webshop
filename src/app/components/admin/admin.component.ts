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

  constructor(private order: OrderService) { }

  ngOnInit(): void {
    this.order.orders$.subscribe((data => {
      this.orders = data;
    }));
    this.order.getOrders();
  }

  _deleteOrders(id: any): void {
    this.order.deleteOrders(id).subscribe((data) => {
      console.log(data);
      this.order.getOrders();
    })
  }
}
