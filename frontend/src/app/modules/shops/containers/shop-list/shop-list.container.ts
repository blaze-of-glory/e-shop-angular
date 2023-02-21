import { Component, OnDestroy, OnInit } from '@angular/core';
import { Shop } from '../../classes/shop';
import { Subscription } from 'rxjs';
import { ShopsFacade } from '../../shops.facade';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.container.html',
  styleUrls: ['./shop-list.container.scss']
})
export class ShopListContainer implements OnInit, OnDestroy {
  public shops: Shop[] = null;
  public shop: Shop = null;
  private shopsSubscription: Subscription = null;
  private shopSubscription: Subscription = null;

  constructor(private facade: ShopsFacade) { }

  ngOnInit(): void {
    this.facade.loadShops();
    this.shopsSubscription = this.facade.getShops$().subscribe(shops => {
      this.shops = shops;
    });
    this.shopSubscription = this.facade.getCurrentShop$().subscribe(shop => {
      this.shop = shop;
    });
  }

  ngOnDestroy(): void {
    this.shopsSubscription.unsubscribe();
    this.shopSubscription.unsubscribe();
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

  deleteShop(id: string) {
    this.facade.deleteShop(id);
  }

  isCreationMode(): boolean {
    return this.shop instanceof Shop;
  }

  cancel() {
    this.facade.setCurrentShop(null);
  }
}
