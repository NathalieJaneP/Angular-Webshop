import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/Product';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public categories: Category[];
  public products: Product[];

  constructor(
    private http: HttpService,
    public cart: CartService
  ) { }

  //Retrieve data
  _getCategories() {
    this.http.getCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }

  _getProducts() {
    this.http.getProducts().subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
    });
  }

  _addToCart(product: any) {
    this.cart.addToCart(product);
  }

  ngOnInit(): void {
    this._getCategories();
    this._getProducts();
  }
}
