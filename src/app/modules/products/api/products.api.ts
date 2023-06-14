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

  getRelevantProducts(providerId: string, materialId: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiEndpoint + `/products/filter?providerId=${providerId}&materialId=${materialId}`);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(this.apiEndpoint + `/products/${id}`);
  }

  createProduct(productDetails: Product, providerId: string, materialId: string): Observable<Product> {
    return this.http.post<Product>(this.apiEndpoint + '/products', { productDetails, providerId, materialId });
  }

  editProduct(id: string, productDetails: any): Observable<Product> {
    return this.http.put<Product>(this.apiEndpoint + `/products/${id}`, productDetails);
  }

  deleteProduct(id: string): Observable<string> {
    return this.http.delete<string>(this.apiEndpoint + `/products/${id}`);
  }
}
