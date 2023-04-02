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

export const selectRelatedProviderId = createSelector(
  selectProductsState,
  (state: ProductsState) => state.relatedProviderId
);

export const selectRelatedMaterialId = createSelector(
  selectProductsState,
  (state: ProductsState) => state.relatedMaterialId
);
