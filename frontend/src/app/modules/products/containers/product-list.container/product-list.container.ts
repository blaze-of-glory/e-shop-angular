import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../classes/product';
import { SubscriptionHelper } from '../../../../shared/helpers/subscription.helper';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { selectAllProducts, selectCurrentProduct } from '../../store/products.selectors';
import { createProduct, deleteProduct, editProduct, getProducts, setCurrentProduct } from '../../store/products.actions';
import { ROUTER_LINKS } from '../../../../shared/constants/router-links';

@Component({
  selector: 'product-list.container',
  templateUrl: './product-list.container.html',
  styleUrls: ['./product-list.container.scss']
})
export class ProductListContainer implements OnInit, OnDestroy {
  public products: Product[] = null;
  public product: Product = null;
  private readonly subscriptionHelper: SubscriptionHelper = new SubscriptionHelper();

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(getProducts());
    this.subscriptionHelper.next = this.store.select(selectAllProducts).subscribe(products => {
      this.products = products;
    });
    this.subscriptionHelper.next = this.store.select(selectCurrentProduct).subscribe(product => {
      this.product = product;
    });
  }

  ngOnDestroy(): void {
    this.subscriptionHelper.unsubscribeAll();
  }

  openDetails(details: Product) {
    this.setCurrentProduct(details);
    this.router.navigateByUrl(ROUTER_LINKS.PRODUCTS + `/${details.id}`)
  }

  addProduct() {
    this.setCurrentProduct(new Product());
  }

  setCurrentProduct(currentProduct: Product) {
    this.store.dispatch(setCurrentProduct({ currentProduct }));
  }

  createProduct(currentProduct: Product) {
    this.store.dispatch(createProduct({ currentProduct }));
    this.setCurrentProduct(null);
  }

  editProduct(currentProduct: Product) {
    this.store.dispatch(editProduct({ currentProduct }));
    this.setCurrentProduct(null);
  }

  deleteProduct(currentProduct: Product) {
    this.store.dispatch(deleteProduct({ currentProduct }))
  }

  isCreationMode(): boolean {
    return this.product instanceof Product;
  }

  cancel() {
    this.setCurrentProduct(null);
  }
}
