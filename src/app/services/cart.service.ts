import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProduct } from '../models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //TYPE IPRODUCT?
  private cart: any = [];

  constructor() { }
  _setLS() {
    localStorage.setItem('localCart', JSON.stringify(this.cart))
  }

  _getCart() {
    if (JSON.parse(localStorage.getItem('localCart')!)) {
      this.cart = JSON.parse(localStorage.getItem('localCart')!);
    }
    return this.cart;
  }

  _setCart(product: any) {
    this.cart.push(product);
    this.cart = localStorage.getItem('localCart')
    console.log(this.cart);
  }

  _addToCart(item: any) {
    this.cart.push(item);
    console.log(this.cart);

    // this.cart = JSON.parse(localStorage.getItem('localCart') || '{}')
    this._setLS()
  }

  //Tar endast bort sista index - ändra till specifikt index
  _removeCartItem(item: any) {
    this.cart.map((a: any, index: any) => {
      if (item.id === a.id) {
        this.cart.splice(index, 1);
      }
      console.log(a.id);
    })
    this._setLS();
  }

  _emptyCart() {
    this.cart = [];
    console.log(this.cart);
    this._setLS();
  }

  _getTotalSum(): number {
    let totalSum: number = 0;
    this.cart.map((item: any) => (totalSum += item.price))
    return totalSum;
  }
}
