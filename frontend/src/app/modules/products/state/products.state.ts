import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsState {
  private _loading$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(null);
  private _currentProduct$: BehaviorSubject<Product> = new BehaviorSubject<Product>(null);
  private _currentProviderId$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  private _currentMaterialId$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  isLoading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  setLoading(isUpdating: boolean) {
    this._loading$.next(isUpdating);
  }

  getProducts$(): Observable<Product[]> {
    return this._products$.asObservable();
  }

  setProducts(products: Product[]) {
    this._products$.next(products);
  }

  getCurrentProduct$(): Observable<Product> {
    return this._currentProduct$.asObservable();
  }

  setCurrentProduct(product: Product) {
    this._currentProduct$.next(product);
  }

  getCurrentProviderId(): string {
    return this._currentProviderId$.value;
  }

  setCurrentProviderId(id: string) {
    this._currentProviderId$.next(id);
  }

  getCurrentMaterialId(): string {
    return this._currentMaterialId$.value;
  }

  setCurrentMaterialId(id: string) {
    this._currentMaterialId$.next(id);
  }
}
