import { Component, OnDestroy, OnInit } from '@angular/core';
import { Provider } from '../../classes/provider';
import { Material } from '../../../materials/classes/material';
import { SubscriptionsService } from '../../../../shared/services/subscriptions.service';
import { Store } from '@ngrx/store';
import { selectAllProviders, selectCurrentProvider } from '../../store/providers.selectors';
import { createProvider, editProvider, getProviders, setCurrentProvider } from '../../store/providers.actions';
import { Router } from '@angular/router';
import { ROUTER_LINKS } from '../../../../shared/constants/router-links';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.container.html',
  styleUrls: ['./provider-list.container.scss']
})
export class ProviderListContainer implements OnInit, OnDestroy {
  public providers: Provider[] = null;
  public provider: Provider = null;

  constructor(private store: Store, private router: Router, private subscriptionsService: SubscriptionsService) { }

  ngOnInit(): void {
    this.store.dispatch(getProviders());
    this.subscriptionsService.next = this.store.select(selectAllProviders).subscribe(providers => {
      this.providers = providers;
    });
    this.subscriptionsService.next = this.store.select(selectCurrentProvider).subscribe(provider => {
      this.provider = provider;
    });
  }

  ngOnDestroy(): void {
    this.subscriptionsService.unsubscribeAll();
  }

  openMaterial(details: Material) {
    void this.router.navigateByUrl(ROUTER_LINKS.PROVIDERS + `/${details.id}`);
  }

  addProvider() {
    this.setCurrentProvider(new Provider());
  }

  setCurrentProvider(currentProvider: Provider) {
    this.store.dispatch(setCurrentProvider({ currentProvider }));
  }

  createProvider(currentProvider: Provider) {
    this.store.dispatch(createProvider({ currentProvider }));
    this.setCurrentProvider(null);
  }

  editProvider(currentProvider: Provider) {
    this.store.dispatch(editProvider({ currentProvider }));
    this.setCurrentProvider(null);
  }

  isCreationMode(): boolean {
    return this.provider instanceof Provider;
  }

  cancel() {
    this.setCurrentProvider(null);
  }
}
