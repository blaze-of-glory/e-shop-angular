import { Injectable } from '@angular/core';
import { Observable, take, zip } from 'rxjs';
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
    this.getRelations$().subscribe((relations: string[]) => {
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
    this.getRelations$().subscribe((relations: string[]) => {
      const [relatedProviderId, relatedMaterialId] = relations;
      this.router.navigateByUrl(ROUTER_LINKS.PROVIDERS + `/${relatedProviderId}/${relatedMaterialId}/${id}`)
    });
  }

  addProduct() {
    this.setCurrentProduct(new Product());
  }

  createProduct(currentProduct: Product) {
    this.getRelations$().subscribe((relations: string[]) => {
      const [relatedProviderId, relatedMaterialId] = relations;
      this.store.dispatch(createProduct({ currentProduct, relatedProviderId, relatedMaterialId }));
      this.setCurrentProduct(null);
      });
  }

  editProduct(currentProduct: Product) {
    this.getRelations$().subscribe((relations: string[]) => {
      const [relatedProviderId, relatedMaterialId] = relations;
      this.store.dispatch(editProduct({ currentProduct, relatedProviderId, relatedMaterialId }));
      this.setCurrentProduct(null);
      });
  }

  deleteProduct(currentProduct: Product) {
    this.getRelations$().subscribe((relations: string[]) => {
      const [relatedProviderId, relatedMaterialId] = relations;
      this.store.dispatch(deleteProduct({ currentProduct, relatedProviderId, relatedMaterialId }))
    });
  }

  private getRelations$(): Observable<string[]> {
    return zip([
      this.store.select(selectRelatedProviderId),
      this.store.select(selectRelatedMaterialId)
    ]).pipe(take(1));
  }
}
