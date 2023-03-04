import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Provider } from '../classes/provider';

@Injectable({
  providedIn: 'root'
})
export class ProvidersState {
  private _loading$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _providers$: BehaviorSubject<Provider[]> = new BehaviorSubject<Provider[]>(null);
  private _currentProvider$: BehaviorSubject<Provider> = new BehaviorSubject<Provider>(null);

  isLoading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  setLoading(isUpdating: boolean) {
    this._loading$.next(isUpdating);
  }

  getProviders$(): Observable<Provider[]> {
    return this._providers$.asObservable();
  }

  setProviders(providers: Provider[]) {
    this._providers$.next(providers);
  }

  getCurrentProvider$(): Observable<Provider> {
    return this._currentProvider$.asObservable();
  }

  setCurrentProvider(provider: Provider) {
    this._currentProvider$.next(provider);
  }
}
