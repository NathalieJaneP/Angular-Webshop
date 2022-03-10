import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/Category';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.productsUrl)

  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.categoriesUrl)
  }
}
