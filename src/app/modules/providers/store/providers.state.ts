import { Provider } from '../classes/provider';
import { createFeatureSelector } from '@ngrx/store';

export interface ProvidersState {
  providers: Provider[];
  currentProvider: Provider;
}

export const providersInitialState: ProvidersState = {
  providers: [],
  currentProvider: null
}

export const selectProvidersState = createFeatureSelector<ProvidersState>('providers');
