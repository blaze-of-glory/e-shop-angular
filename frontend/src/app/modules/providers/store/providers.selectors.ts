import { createSelector } from '@ngrx/store';
import { ProvidersState, selectProvidersState } from './providers.state';

export const selectAllProviders = createSelector(
  selectProvidersState,
  (state: ProvidersState) => state.providers
);

export const selectCurrentProvider = createSelector(
  selectProvidersState,
  (state: ProvidersState) => state.currentProvider
);
