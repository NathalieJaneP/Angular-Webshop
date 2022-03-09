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
  public products: any;

  constructor(
    private http: HttpService,
    public cart: CartService
  ) { }

  //Retrieve data
  getProducts(): void {
    this.http.getProducts().subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
    });
  }

  addToCart(product: any) {
    this.cart._addToCart(product);
  }


  ngOnInit(): void {
    this.getProducts();
  }

}
