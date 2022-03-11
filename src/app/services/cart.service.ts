import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartList: Product[] = [];

  constructor() { }

  setLS() {
    localStorage.setItem('localCart', JSON.stringify(this.cartList))
  }

  getLS() {
    this.cartList = JSON.parse(localStorage.getItem('localCart') || '[]');
  }

  getCart() {
    this.getLS();
    return this.cartList;
  }

  addToCart(product: Product) {
    const productExist =
      this.cartList.find((({ name }) => name === product.name));

    if (!productExist) {
      this.cartList.push({ ...product, quantity: 1 });
      alert('Movie added to cart');
    } else {
      productExist.quantity += 1;
      alert('Movie added to cart');
    }
    this.setLS();
  }

  removeCartItem(product: Product) {
    this.cartList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartList.splice(index, 1);
      }
    });
    this.setLS();
  }

  emptyCart() {
    localStorage.removeItem('localCart');
    return this.cartList;
  }

  getTotalSum(): number {
    let totalSum: number = 0;
    this.cartList.map((item: any) => (totalSum += item.price * item.quantity));
    return totalSum;
  }

  getQty(): number {
    let totalQty: number = 0;
    this.cartList.map((item: any) => {
      totalQty += item.quantity
    });
    return totalQty;
  }
}
