import { Component, OnDestroy, OnInit } from '@angular/core';
import { Shop } from '../../classes/shop';
import { SubscriptionsService } from '../../../../shared/services/subscriptions.service';
import { Store } from '@ngrx/store';
import { createShop, deleteShop, editShop, getShops, setCurrentShop } from '../../store/shops.actions';
import { selectAllShops, selectCurrentShop } from '../../store/shops.selectors';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.container.html',
  styleUrls: ['./shop-list.container.scss']
})
export class ShopListContainer implements OnInit, OnDestroy {
  public shops: Shop[] = null;
  public shop: Shop = null;

  constructor(private store: Store, private subscriptionsService: SubscriptionsService) { }

  ngOnInit(): void {
    this.store.dispatch(getShops());
    this.subscriptionsService.next = this.store.select(selectAllShops).subscribe(shops => {
      this.shops = shops;
    });
    this.subscriptionsService.next = this.store.select(selectCurrentShop).subscribe(shop => {
      this.shop = shop;
    });
  }

  ngOnDestroy(): void {
    this.subscriptionsService.unsubscribeAll();
  }

  addShop() {
    this.setCurrentShop(new Shop());
  }

  setCurrentShop(currentShop: Shop) {
    this.store.dispatch(setCurrentShop({ currentShop }));
  }

  createShop(currentShop: Shop) {
    this.store.dispatch(createShop({ currentShop }));
    this.setCurrentShop(null);
  }

  editShop(currentShop: Shop) {
    this.store.dispatch(editShop({ currentShop }));
    this.setCurrentShop(null);
  }

  deleteShop(currentShop: Shop) {
    this.store.dispatch(deleteShop({ currentShop }));
  }

  isCreationMode(): boolean {
    return this.shop instanceof Shop;
  }

  cancel() {
    this.setCurrentShop(null);
  }
}
