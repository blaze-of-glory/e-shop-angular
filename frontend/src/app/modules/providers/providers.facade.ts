import { Injectable } from '@angular/core';
import { ProvidersApi } from './api/providers.api';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Provider } from './classes/provider';
import { ROUTER_LINKS } from '../../shared/constants/router-links';
import { Store } from '@ngrx/store';
import { selectAllProviders, selectCurrentProvider } from './store/providers.selectors';
import { createProvider, editProvider, getProviders, setCurrentProvider } from './store/providers.actions';


@Injectable({
  providedIn: 'root'
})
export class ProvidersFacade {

  constructor(private api: ProvidersApi, private store: Store, private router: Router) { }

  getProviders$(): Observable<Provider[]> {
    return this.store.select(selectAllProviders);
  }

  setProviders() {
    this.store.dispatch(getProviders());
  }

  getCurrentProvider$(): Observable<Provider> {
    return this.store.select(selectCurrentProvider);
  }

  setCurrentProvider(currentProvider: Provider) {
    this.store.dispatch(setCurrentProvider({ currentProvider }));
  }

  openMaterial(id: string) {
    this.router.navigateByUrl(ROUTER_LINKS.PROVIDERS + `/${id}`);
  }

  addProvider() {
    this.setCurrentProvider(new Provider());
  }

  createProvider(currentProvider: Provider) {
    this.store.dispatch(createProvider({ currentProvider }));
    this.setCurrentProvider(null);
  }

  editProvider(currentProvider: Provider) {
    this.store.dispatch(editProvider({ currentProvider }));
    this.setCurrentProvider(null);
  }
}
