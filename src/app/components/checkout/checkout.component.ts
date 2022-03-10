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
  cartList: Product[] = this.cart.getCart();

  //Lägg till required + fler alternativ
  userForm = this.form.group({
    name: ['', Validators.required],
    address: '',
    payment: ['']
  });

  constructor(
    private form: FormBuilder,
    private cart: CartService,
    private orderService: OrderService
  ) { }

  ngOnInit(): void { }

  createOrder() {
    //lägg till amount för samma film
    this.order.orderRows = [];
    for (let i = 0; i < this.cartList.length; i++) {
      let orderInfo = new OrderRows(
        this.cartList[i].id,
        this.cartList[i].quantity);
      this.order.orderRows.push(orderInfo)
      console.log(orderInfo);
    }

    // New Order <= Form
    this.order.createdBy = this.userForm.value.name;
    this.order.paymentMethod = this.userForm.value.payment;
    this.order.totalPrice = this.cart.getTotalSum();
    console.log(this.order)
  }

  onSubmit(): void {
    this.createOrder();
    this.orderService.postOrder(this.order)
      .subscribe(
        (val) => {
          console.log("Post success", val);
        });

    this.cartList = this.cart.emptyCart();
    this.userForm.reset();
  }
}
