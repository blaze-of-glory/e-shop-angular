import { createSelector } from '@ngrx/store';
import { selectShopsState, ShopsState } from './shops.state';

export const selectAllShops = createSelector(
  selectShopsState,
  (state: ShopsState) => state.shops
);

export const selectCurrentShop = createSelector(
  selectShopsState,
  (state: ShopsState) => state.currentShop
);
