import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartList: Product[] = [];
  sumTotal: number = 0;
  cartQty: number = 0;

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.cartList = this.cart.getCart();
    this.sumTotal = this.cart.getTotalSum();
    this.cartQty = this.cart.getQty();
  }

  _getCart() {
    this.cart.getCart();
  }

  _removeCartItem(item: any) {
    this.cart.removeCartItem(item);
    this.sumTotal = this.cart.getTotalSum();
    this.cartQty = this.cart.getQty();
  }


  _emptyCart() {
    this.cart.emptyCart();
    this.cartList = [];
  }
}
