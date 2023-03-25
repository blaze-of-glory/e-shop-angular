import { Injectable } from '@angular/core';
import { ShopsApi } from './api/shops.api';
import { Observable } from 'rxjs';
import { Shop } from './classes/shop';
import { Store } from '@ngrx/store';
import { selectAllShops, selectCurrentShop } from './store/shops.selectors';
import { createShop, deleteShop, editShop, getShops, setCurrentShop } from './store/shops.actions';

@Injectable({
  providedIn: 'root'
})
export class ShopsFacade {

  constructor(private api: ShopsApi, private store: Store) { }

  getShops$(): Observable<Shop[]> {
    return this.store.select(selectAllShops);
  }

  setShops() {
    this.store.dispatch(getShops());
  }

  getCurrentShop$(): Observable<Shop> {
    return this.store.select(selectCurrentShop);
  }

  setCurrentShop(currentShop: Shop) {
    this.store.dispatch(setCurrentShop({ currentShop }));
  }

  addShop() {
    this.setCurrentShop(new Shop());
  }

  createShop(currentShop: Shop) {
    this.store.dispatch(createShop({ currentShop }));
    this.store.dispatch(setCurrentShop({ currentShop: null }));
  }

  editShop(currentShop: Shop) {
    this.store.dispatch(editShop({ currentShop }));
    this.store.dispatch(setCurrentShop({ currentShop: null }));
  }

  deleteShop(currentShop: Shop) {
    this.store.dispatch(deleteShop({ currentShop }));
  }
}
