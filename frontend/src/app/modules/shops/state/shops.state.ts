import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Shop } from '../classes/shop';

@Injectable({
  providedIn: 'root'
})
export class ShopsState {
  private _loading$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _shops$: BehaviorSubject<Shop[]> = new BehaviorSubject<Shop[]>(null);
  private _currentShop$: BehaviorSubject<Shop> = new BehaviorSubject<Shop>(null);

  isLoading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  setLoading(isUpdating: boolean) {
    this._loading$.next(isUpdating);
  }

  getShops$(): Observable<Shop[]> {
    return this._shops$.asObservable();
  }

  setShops(shops: Shop[]) {
    this._shops$.next(shops);
  }

  getCurrentShop$(): Observable<Shop> {
    return this._currentShop$.asObservable();
  }

  setCurrentShop(shop: Shop) {
    this._currentShop$.next(shop);
  }
}
