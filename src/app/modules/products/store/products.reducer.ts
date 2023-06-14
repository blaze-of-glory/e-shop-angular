import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { productsInitialState, ProductsState } from './products.state';
import { setCurrentProduct, setProducts, setRelatedMaterialId, setRelatedProviderId } from './products.actions';

export const createProductsReducer: ActionReducer<ProductsState> = createReducer<ProductsState>(
  productsInitialState,
  on(setProducts, (state, action) => ({
    ...state,
    products: action.products
  })),
  on(setCurrentProduct, (state, action) => ({
    ...state,
    currentProduct: action.currentProduct
  })),
  on(setRelatedProviderId, (state, action) => ({
    ...state,
    relatedProviderId: action.relatedProviderId
  })),
  on(setRelatedMaterialId, (state, action) => ({
    ...state,
    relatedMaterialId: action.relatedMaterialId
  }))
);

export const productsReducer = (state: ProductsState | undefined, action: Action) => createProductsReducer(state, action);
