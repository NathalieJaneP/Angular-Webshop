import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: Product[];

  constructor(
    private http: HttpService,
    private cart: CartService
  ) { }

  _getProducts() {
    this.http.getProducts().subscribe((data: any) => {
      this.products = data;
    });
  }

  _addToCart(product: any) {
    this.cart.addToCart(product);
  }

  ngOnInit(): void {
    this._getProducts();
  }
}
