import { createSelector } from '@ngrx/store';
import { ProductsState, selectProductsState } from './products.state';

export const selectAllProducts = createSelector(
  selectProductsState,
  (state: ProductsState) => state.products
);

export const selectCurrentProduct = createSelector(
  selectProductsState,
  (state: ProductsState) => state.currentProduct
);

export const selectProductRelations = createSelector(
  selectProductsState,
  (state: ProductsState) => [state.relatedProviderId, state.relatedMaterialId]
);
