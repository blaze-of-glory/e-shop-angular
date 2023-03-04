import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { AboutUs } from "../shared/interfaces/about-us";
import { Material } from "../shared/interfaces/material";
import { Product } from "../shared/interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly apiEndpoint = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  public getAboutUs(): Observable<AboutUs> {
    return this.http.get<AboutUs>(this.apiEndpoint + '/about-us');
  }

  public getFilteredMaterials(providerId: string): Observable<Material[]> {
    return this.http.get<Material[]>(this.apiEndpoint + `/materials/filter?providerId=${providerId}`);
  }

  public createMaterial(materialDetails: any): Observable<Material> {
    return this.http.post<Material>(this.apiEndpoint + '/materials', materialDetails)
  }

  public editMaterial(id: string, materialDetails: any): Observable<Material> {
    return this.http.put<Material>(this.apiEndpoint + `/materials/${id}`, materialDetails);
  }

  public getFilteredProducts(providerId: string, materialId: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiEndpoint + `/products/filter?providerId=${providerId}&materialId=${materialId}`);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(this.apiEndpoint + `/products/${id}`);
  }

  public createProduct(productDetails: any): Observable<Product> {
    return this.http.post<Product>(this.apiEndpoint + '/products', productDetails);
  }

  public editProduct(id: string, productDetails: any): Observable<Product> {
    return this.http.put<Product>(this.apiEndpoint + `/products/${id}`, productDetails);
  }

  public deleteProduct(id: string): Observable<string> {
    return this.http.delete<string>(this.apiEndpoint + `/products/${id}`);
  }

}
