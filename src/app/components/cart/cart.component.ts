import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: IProduct[] = [];
  sumTotal: number = 0;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cart = this.cartService._getCart();
    this.sumTotal = this.cartService._getTotalSum();
  }

  getCart() {
    this.cartService._getCart();
    // this.sumTotal = this.cartService._getTotalSum();
  }

  removeCartItem(item: any) {
    this.cartService._removeCartItem(item);
  }

  //Fixa uppdatering
  emptyCart() {
    this.cartService._emptyCart();
  }



}
