import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //Byt namn till cartlist
  private cart: Product[] = [];

  constructor() { }
  //ta bort _
  _setLS() {
    localStorage.setItem('localCart', JSON.stringify(this.cart))
  }

  _getLS() {
    this.cart = JSON.parse(localStorage.getItem('localCart') || '[]');
  }

  _getCart() {
    //samma sak va?
    this._getLS();
    return this.cart;
  }

  //Ta bort?
  _setCart(product: any) {
    this.cart.push(product);
    this._getLS();
    console.log(this.cart);
  }

  _addToCart(product: Product) {
    for (let item of this.cart) {
      if (item.id === product.id) {
        item.quantity += 1
      }
    }

    this.cart.push({ ...product, quantity: 1 });
    console.log(this.cart);
    this._setLS()
  }

  //Bugg behöver fixas?Tar bort flera när samma id
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
    return this.cart
  }

  _getTotalSum(): number {
    let totalSum: number = 0;
    this.cart.map((item: any) => (totalSum += item.price));
    return totalSum;
  }
}
