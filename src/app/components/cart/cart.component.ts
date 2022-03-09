import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  cartQty: number = 0;
  sumTotal: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService._getCart();
    this.sumTotal = this.cartService._getTotalSum();
    this.cartQty = this.cart.length;
  }

  getCart() {
    this.cartService._getCart();
    // this.sumTotal = this.cartService._getTotalSum();
  }

  //lägg till_
  removeCartItem(item: any) {
    this.cartService._removeCartItem(item);
    this.sumTotal = this.cartService._getTotalSum();
    //förkorta
    this.cartQty = this.cart.length;
  }

  //Fixa uppdatering
  emptyCart() {
    this.cartService._emptyCart();
  }



}
