import { Action, createReducer, on } from '@ngrx/store';
import { shopsInitialState, ShopsState } from './shops.state';
import { loadShops, setCurrentShop } from './shops.actions';

export const createShopsReducer = createReducer<ShopsState>(
  shopsInitialState,
  on(loadShops, (state, action) => ({
    ...state,
    shops: action.shops
  })),
  on(setCurrentShop, (state, action) => ({
    ...state,
    currentShop: action.currentShop
  }))
);

export const shopsReducer = (state: ShopsState | undefined, action: Action) => createShopsReducer(state, action);
