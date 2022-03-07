import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Order, OrderRows } from 'src/app/models/Order';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  order: Order = new Order();
  items = this.cartService._getCart();

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
    //New Order <= Form
    this.order.createdBy = this.checkoutForm.value.name;
    this.order.paymentMethod = this.checkoutForm.value.payment;
    this.order.totalPrice = this.cartService._getTotalSum();

    this.order.orderRows = [];
    this.items.map((item: any) => {
      let row = new OrderRows(item.id, item.productId, null, item.amount, this.order.id)
      this.order.orderRows.push(row)
    });

    this.orderService._postOrder(this.order)
      .subscribe(
        (val) => {
          console.log("Post success", val);
        });

    this.items = this.cartService._emptyCart();
    this.checkoutForm.reset();
    console.log(this.checkoutForm);
  }



}
