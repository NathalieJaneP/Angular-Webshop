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
  setLS() {
    localStorage.setItem('localCart', JSON.stringify(this.cart))
  }

  getLS() {
    this.cart = JSON.parse(localStorage.getItem('localCart') || '[]');
  }

  getCart() {
    this.getLS();
    return this.cart;
  }

  //Ta bort?
  _setCart(product: any) {
    this.cart.push(product);
    this.getLS();
    console.log(this.cart);
  }

  addToCart(product: Product) {
    const productExist = this.cart

      .find((({ name }) => name === product.name));
    if (!productExist) {
      this.cart.push({ ...product, quantity: 1 });
      return;
    }
    productExist.quantity += 1;

    console.log(this.cart);
    this.setLS()
  }

  //Bugg behöver fixas?Tar bort flera när samma id
  removeCartItem(item: any) {
    this.cart.map((a: any, index: any) => {
      if (item.id === a.id) {
        this.cart.splice(index, 1);
      }
      console.log(a.id);
    })
    this.setLS();
  }

  emptyCart() {

    localStorage.removeItem('localCart');
    return this.cart;
  }

  getTotalSum(): number {
    let totalSum: number = 0;
    this.cart.map((item: any) => (totalSum += item.price * item.quantity));
    return totalSum;
  }

  getQty(): number {
    let totalQty: number = 0;
    this.cart.map((item: any) => {
      totalQty += item.quantity
    })
    return totalQty;
  }
}
