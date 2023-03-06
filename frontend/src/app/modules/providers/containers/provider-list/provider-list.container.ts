import { Component, OnDestroy, OnInit } from '@angular/core';
import { Provider } from '../../classes/provider';
import { Subscription } from 'rxjs';
import { ProvidersFacade } from '../../providers.facade';
import { Material } from '../../../materials/classes/material';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.container.html',
  styleUrls: ['./provider-list.container.scss']
})
export class ProviderListContainer implements OnInit, OnDestroy {
  public providers: Provider[] = null;
  public provider: Provider = null;
  private providersSubscription: Subscription = null;
  private providerSubscription: Subscription = null;
  constructor(private facade: ProvidersFacade) { }

  ngOnInit(): void {
    this.facade.loadProviders();
    this.providersSubscription = this.facade.getProviders$().subscribe(providers => {
      this.providers = providers;
    });
    this.providerSubscription = this.facade.getCurrentProvider$().subscribe(provider => {
      this.provider = provider;
    });
  }

  ngOnDestroy(): void {
    this.providersSubscription.unsubscribe();
    this.providerSubscription.unsubscribe();
  }

  openMaterial(details: Material) {
    this.facade.openMaterial(details.id);
  }

  addProvider() {
    this.facade.addProvider();
  }

  setCurrentProvider(provider: Provider) {
    this.facade.setCurrentProvider(provider);
  }

  createProvider(provider: Provider) {
    this.facade.createProvider(provider);
  }

  editProvider(provider: Provider) {
    this.facade.editProvider(provider);
  }

  isCreationMode(): boolean {
    return this.provider instanceof Provider;
  }

  cancel() {
    this.facade.setCurrentProvider(null);
  }
}
