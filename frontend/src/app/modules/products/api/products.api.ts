import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../classes/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsApi {
  private readonly apiEndpoint = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiEndpoint + `/products`);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(this.apiEndpoint + `/products/${id}`);
  }

  createProduct(productDetails: Product): Observable<Product> {
    return this.http.post<Product>(this.apiEndpoint + '/products', productDetails);
  }

  editProduct(id: string, productDetails: any): Observable<Product> {
    return this.http.put<Product>(this.apiEndpoint + `/products/${id}`, productDetails);
  }

  deleteProduct(id: string): Observable<string> {
    return this.http.delete<string>(this.apiEndpoint + `/products/${id}`);
  }
}
