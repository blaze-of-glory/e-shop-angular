import { Injectable } from '@angular/core';
import { forkJoin, Observable, take } from 'rxjs';
import { Product } from './classes/product';
import { ROUTER_LINKS } from '../../shared/constants/router-links';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { selectAllProducts, selectCurrentProduct, selectRelatedMaterialId, selectRelatedProviderId } from './store/products.selectors';
import { createProduct, deleteProduct, editProduct, getProducts, setCurrentProduct } from './store/products.actions';

@Injectable({
  providedIn: 'root'
})
export class ProductsFacade {

  constructor(private store: Store, private router: Router) { }

  getProducts$(): Observable<Product[]> {
    return this.store.select(selectAllProducts);
  }

  setProducts() {
    forkJoin([
      this.store.select(selectRelatedProviderId).pipe(take(1)),
      this.store.select(selectRelatedMaterialId).pipe(take(1))
    ]).subscribe((relations: string[]) => {
      const [relatedProviderId, relatedMaterialId] = relations;
      this.store.dispatch(getProducts({ relatedProviderId, relatedMaterialId }))
    });
  }

  getCurrentProduct$(): Observable<Product> {
    return this.store.select(selectCurrentProduct);
  }

  setCurrentProduct(currentProduct: Product) {
    this.store.dispatch(setCurrentProduct({ currentProduct }));
  }

  openDetails(id: string) {
    forkJoin([
      this.store.select(selectRelatedProviderId).pipe(take(1)),
      this.store.select(selectRelatedMaterialId).pipe(take(1))
    ]).subscribe((relations: string[]) => {
      const [relatedProviderId, relatedMaterialId] = relations;
      this.router.navigateByUrl(ROUTER_LINKS.PROVIDERS + `/${relatedProviderId}/${relatedMaterialId}/${id}`)
    });
  }

  addProduct() {
    this.setCurrentProduct(new Product());
  }

  createProduct(currentProduct: Product) {
    forkJoin([
      this.store.select(selectRelatedProviderId).pipe(take(1)),
      this.store.select(selectRelatedMaterialId).pipe(take(1))
    ]).subscribe((relations: string[]) => {
      const [relatedProviderId, relatedMaterialId] = relations;
      this.store.dispatch(createProduct({ currentProduct, relatedProviderId, relatedMaterialId }));
      this.setCurrentProduct(null);
      });
  }

  editProduct(currentProduct: Product) {
    forkJoin([
      this.store.select(selectRelatedProviderId).pipe(take(1)),
      this.store.select(selectRelatedMaterialId).pipe(take(1))
    ]).subscribe((relations: string[]) => {
      const [relatedProviderId, relatedMaterialId] = relations;
      this.store.dispatch(editProduct({ currentProduct, relatedProviderId, relatedMaterialId }));
      this.setCurrentProduct(null);
      });
  }

  deleteProduct(currentProduct: Product) {
    forkJoin([
      this.store.select(selectRelatedProviderId).pipe(take(1)),
      this.store.select(selectRelatedMaterialId).pipe(take(1))
    ]).subscribe((relations: string[]) => {
      const [relatedProviderId, relatedMaterialId] = relations;
      this.store.dispatch(deleteProduct({ currentProduct, relatedProviderId, relatedMaterialId }))
    });
  }
}
