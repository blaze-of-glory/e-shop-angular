import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../classes/product';
import { SubscriptionsService } from '../../../../shared/services/subscriptions.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { selectAllProducts, selectCurrentProduct, selectProductRelations } from '../../store/products.selectors';
import { createProduct, deleteProduct, editProduct, getProducts, setCurrentProduct } from '../../store/products.actions';
import { ROUTER_LINKS } from '../../../../shared/constants/router-links';
import { take } from 'rxjs';

@Component({
  selector: 'product-list.container',
  templateUrl: './product-list.container.html',
  styleUrls: ['./product-list.container.scss']
})
export class ProductListContainer implements OnInit, OnDestroy {
  public products: Product[] = null;
  public product: Product = null;

  constructor(private store: Store, private router: Router, private subscriptionsService: SubscriptionsService) { }

  ngOnInit(): void {
    this.store.select(selectProductRelations)
      .pipe(take(1))
      .subscribe((relations: string[]) => {
      const [relatedProviderId, relatedMaterialId] = relations;
      this.store.dispatch(getProducts({ relatedProviderId, relatedMaterialId }))
    });
    this.subscriptionsService.next = this.store.select(selectAllProducts).subscribe(products => {
      this.products = products;
    });
    this.subscriptionsService.next = this.store.select(selectCurrentProduct).subscribe(product => {
      this.product = product;
    });
  }

  ngOnDestroy(): void {
    this.subscriptionsService.unsubscribeAll();
  }

  openDetails(details: Product) {
    this.setCurrentProduct(details);
    this.store.select(selectProductRelations)
      .pipe(take(1))
      .subscribe((relations: string[]) => {
      const [relatedProviderId, relatedMaterialId] = relations;
      void this.router.navigateByUrl(ROUTER_LINKS.PROVIDERS + `/${relatedProviderId}/${relatedMaterialId}/${details.id}`)
    });
  }

  addProduct() {
    this.setCurrentProduct(new Product());
  }

  setCurrentProduct(currentProduct: Product) {
    this.store.dispatch(setCurrentProduct({ currentProduct }));
  }

  createProduct(currentProduct: Product) {
    this.store.select(selectProductRelations)
      .pipe(take(1))
      .subscribe((relations: string[]) => {
      const [relatedProviderId, relatedMaterialId] = relations;
      this.store.dispatch(createProduct({ currentProduct, relatedProviderId, relatedMaterialId }));
      this.setCurrentProduct(null);
    });
  }

  editProduct(currentProduct: Product) {
    this.store.select(selectProductRelations)
      .pipe(take(1))
      .subscribe((relations: string[]) => {
      const [relatedProviderId, relatedMaterialId] = relations;
      this.store.dispatch(editProduct({ currentProduct, relatedProviderId, relatedMaterialId }));
      this.setCurrentProduct(null);
    });
  }

  deleteProduct(currentProduct: Product) {
    this.store.select(selectProductRelations)
      .pipe(take(1))
      .subscribe((relations: string[]) => {
      const [relatedProviderId, relatedMaterialId] = relations;
      this.store.dispatch(deleteProduct({ currentProduct, relatedProviderId, relatedMaterialId }))
    });
  }

  isCreationMode(): boolean {
    return this.product instanceof Product;
  }

  cancel() {
    this.setCurrentProduct(null);
  }
}
