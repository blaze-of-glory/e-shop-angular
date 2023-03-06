import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './classes/product';
import { ROUTER_LINKS } from '../../shared/constants/router-links';
import { ProductsApi } from './api/products.api';
import { ProductsState } from './state/products.state';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsFacade {

  constructor(private api: ProductsApi, private state: ProductsState, private router: Router) { }

  isLoading$(): Observable<boolean> {
    return this.state.isLoading$();
  }

  getProducts$(): Observable<Product[]> {
    return this.state.getProducts$();
  }

  loadProducts() {
    this.api.getRelevantProducts(this.state.getCurrentProviderId(), this.state.getCurrentMaterialId())
      .subscribe((products: Product[]) => this.state.setProducts(products));
  }

  getCurrentProduct$(): Observable<Product> {
    return this.state.getCurrentProduct$();
  }

  setCurrentProduct(product: Product) {
    this.state.setCurrentProduct(product);
  }

  setCurrentProviderId(id: string) {
    this.state.setCurrentProviderId(id);
  }

  setCurrentMaterialId(id: string) {
    this.state.setCurrentMaterialId(id);
  }

  openDetails(id: string) {
    this.router.navigateByUrl(ROUTER_LINKS.PRODUCTS + `/${id}`);
  }

  addProduct() {
    this.setCurrentProduct(new Product());
  }

  createProduct(product: Product) {
    this.state.setLoading(true);
    this.api.createProduct(product, this.state.getCurrentProviderId(), this.state.getCurrentMaterialId()).subscribe(
      () => {
        this.loadProducts();
        this.setCurrentProduct(null);
      },
      error => console.log(error),
      () => this.state.setLoading(false)
    );
  }

  editProduct(product: Product) {
    this.state.setLoading(true);
    this.api.editProduct(product.id, product).subscribe(
      () => {
        this.loadProducts();
        this.setCurrentProduct(null);
      },
      error => console.log(error),
      () => this.state.setLoading(false)
    );
  }

  deleteProduct(id: string) {
    this.state.setLoading(true);
    this.api.deleteProduct(id).subscribe(
      () => this.loadProducts(),
      error => console.log(error),
      () => this.state.setLoading(false)
    );
  }
}
