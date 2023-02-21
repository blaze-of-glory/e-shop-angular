import { Injectable } from '@angular/core';
import { ShopsApi } from './api/shops.api';
import { ShopsState } from './state/shops.state';
import { Observable } from 'rxjs';
import { Shop } from './classes/shop';

@Injectable({
  providedIn: 'root'
})
export class ShopsFacade {

  constructor(private api: ShopsApi, private state: ShopsState) { }

  isLoading$(): Observable<boolean> {
    return this.state.isLoading$();
  }

  getShops$(): Observable<Shop[]> {
    return this.state.getShops$();
  }

  loadShops() {
    this.api.getAllShops().subscribe((shops: Shop[]) => this.state.setShops(shops));
  }

  getCurrentShop$(): Observable<Shop> {
    return this.state.getCurrentShop$();
  }

  setCurrentShop(shop: Shop) {
    this.state.setCurrentShop(shop);
  }

  addShop() {
    this.setCurrentShop(new Shop());
  }

  createShop(shop: Shop) {
    this.state.setLoading(true);
    this.api.createShop(shop).subscribe(
      () => {
        this.loadShops();
        this.setCurrentShop(null);
      },
      error => console.log(error),
      () => this.state.setLoading(false)
    );
  }

  editShop(shop: Shop) {
    this.state.setLoading(true);
    this.api.editShop(shop.id, shop).subscribe(
      () => {
        this.loadShops();
        this.setCurrentShop(null);
      },
      error => console.log(error),
      () => this.state.setLoading(false)
    );
  }

  deleteShop(id: string) {
    this.state.setLoading(true);
    this.api.deleteShop(id).subscribe(
      () => this.loadShops(),
      error => console.log(error),
      () => this.state.setLoading(false)
    );
  }
}
