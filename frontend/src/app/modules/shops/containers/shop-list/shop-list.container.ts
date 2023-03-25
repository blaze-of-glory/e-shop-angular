import { Component, OnDestroy, OnInit } from '@angular/core';
import { Shop } from '../../classes/shop';
import { ShopsFacade } from '../../shops.facade';
import { SubscriptionHelper } from '../../../../shared/helpers/subscription.helper';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.container.html',
  styleUrls: ['./shop-list.container.scss']
})
export class ShopListContainer implements OnInit, OnDestroy {
  public shops: Shop[] = null;
  public shop: Shop = null;
  private readonly subscriptionHelper: SubscriptionHelper = new SubscriptionHelper();

  constructor(private facade: ShopsFacade) { }

  ngOnInit(): void {
    this.facade.setShops();
    this.subscriptionHelper.next = this.facade.getShops$().subscribe(shops => {
      this.shops = shops;
    });
    this.subscriptionHelper.next = this.facade.getCurrentShop$().subscribe(shop => {
      this.shop = shop;
    });
  }

  ngOnDestroy(): void {
    this.subscriptionHelper.unsubscribeAll();
  }

  addShop() {
    this.facade.addShop();
  }

  setCurrentShop(shop: Shop) {
    this.facade.setCurrentShop(shop);
  }

  createShop(shop: Shop) {
    this.facade.createShop(shop);
  }

  editShop(shop: Shop) {
    this.facade.editShop(shop);
  }

  deleteShop(shop: Shop) {
    this.facade.deleteShop(shop);
  }

  isCreationMode(): boolean {
    return this.shop instanceof Shop;
  }

  cancel() {
    this.facade.setCurrentShop(null);
  }
}
