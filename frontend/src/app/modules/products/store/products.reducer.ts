import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { productsInitialState, ProductsState } from './products.state';
import { setCurrentProduct, setProducts } from './products.actions';

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
);

export const productsReducer = (state: ProductsState | undefined, action: Action) => createProductsReducer(state, action);
