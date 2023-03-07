import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../classes/product';
import { ProductsFacade } from '../../products.facade';
import { ActivatedRoute } from '@angular/router';
import { SubscriptionHelper } from '../../../../shared/helpers/subscription.helper';

@Component({
  selector: 'product-list.container',
  templateUrl: './product-list.container.html',
  styleUrls: ['./product-list.container.scss']
})
export class ProductListContainer implements OnInit, OnDestroy {
  public products: Product[] = null;
  public product: Product = null;
  private readonly subscriptionHelper: SubscriptionHelper = new SubscriptionHelper();

  constructor(private facade: ProductsFacade, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setCurrentProviderId();
    this.setCurrentMaterialId();
    this.facade.loadProducts();
    this.subscriptionHelper.next = this.facade.getProducts$().subscribe(products => {
      this.products = products;
    });
    this.subscriptionHelper.next = this.facade.getCurrentProduct$().subscribe(product => {
      this.product = product;
    });
  }

  ngOnDestroy(): void {
    this.subscriptionHelper.unsubscribeAll();
  }

  setCurrentProviderId() {
    this.facade.setCurrentProviderId(this.route.snapshot.params['provider']);
  }

  setCurrentMaterialId() {
    this.facade.setCurrentMaterialId(this.route.snapshot.params['material']);
  }

  openDetails(details: Product) {
    this.setCurrentProduct(details);
    this.facade.openDetails(details.id);
  }

  addProduct() {
    this.facade.addProduct();
  }

  setCurrentProduct(product: Product) {
    this.facade.setCurrentProduct(product);
  }

  createProduct(product: Product) {
    this.facade.createProduct(product);
  }

  editProduct(product: Product) {
    this.facade.editProduct(product);
  }

  deleteProduct(id: string) {
    this.facade.deleteProduct(id);
  }

  isCreationMode(): boolean {
    return this.product instanceof Product;
  }

  cancel() {
    this.facade.setCurrentProduct(null);
  }
}
