import { Injectable } from '@angular/core';
import { ProvidersApi } from './api/providers.api';
import { ProvidersState } from './state/providers.state';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Provider } from './classes/provider';
import { ROUTER_LINKS } from '../../shared/constants/router-links';


@Injectable({
  providedIn: 'root'
})
export class ProvidersFacade {

  constructor(private api: ProvidersApi, private state: ProvidersState, private router: Router) { }

  isLoading$(): Observable<boolean> {
    return this.state.isLoading$();
  }

  getProviders$(): Observable<Provider[]> {
    return this.state.getProviders$();
  }

  loadProviders() {
    this.api.getAllProviders().subscribe((providers: Provider[]) => this.state.setProviders(providers));
  }

  getCurrentProvider$(): Observable<Provider> {
    return this.state.getCurrentProvider$();
  }

  setCurrentProvider(provider: Provider) {
    this.state.setCurrentProvider(provider);
  }

  openMaterial(id: string) {
    this.router.navigateByUrl(ROUTER_LINKS.PROVIDERS + `/${id}`);
  }

  addProvider() {
    this.setCurrentProvider(new Provider());
  }

  createProvider(provider: Provider) {
    this.state.setLoading(true);
    this.api.createProvider(provider).subscribe(
      () => {
        this.loadProviders();
        this.setCurrentProvider(null);
      },
      error => console.log(error),
      () => this.state.setLoading(false)
    );
  }

  editProvider(provider: Provider) {
    this.state.setLoading(true);
    this.api.editProvider(provider.id, provider).subscribe(
      () => {
        this.loadProviders();
        this.setCurrentProvider(null);
      },
      error => console.log(error),
      () => this.state.setLoading(false)
    );
  }
}
