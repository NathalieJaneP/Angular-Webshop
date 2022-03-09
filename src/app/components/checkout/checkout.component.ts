import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Order } from 'src/app/models/Order';
import { OrderRows } from 'src/app/models/OrderRows';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  order: Order = new Order();
  items: Product[] = this.cartService._getCart();

  //Lägg till required + fler alternativ
  checkoutForm = this.formBuilder.group({
    name: ['', Validators.required],
    address: '',
    payment: ['']
  });

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private orderService: OrderService
  ) { }

  ngOnInit(): void { }

  onSubmit(): void {
    //lägg till amount för samma film
    this.order.orderRows = [];
    for (let i = 0; i < this.items.length; i++) {
      let orderInfo = new OrderRows(
        this.items[i].id,
        this.items[i].quantity);
      this.order.orderRows.push(orderInfo)
      console.log(orderInfo);
    }

    // New Order <= Form
    this.order.createdBy = this.checkoutForm.value.name;
    this.order.paymentMethod = this.checkoutForm.value.payment;
    this.order.totalPrice = this.cartService._getTotalSum();
    console.log(this.order)

    this.orderService._postOrder(this.order)
      .subscribe(
        (val) => {
          console.log("Post success", val);
        });

    this.items = this.cartService._emptyCart();
    this.checkoutForm.reset();
  }
}
