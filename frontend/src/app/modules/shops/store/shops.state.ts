import { Shop } from '../classes/shop';
import { createFeatureSelector } from '@ngrx/store';

export interface ShopsState {
  shops: Shop[];
  currentShop: Shop;
}

export const shopsInitialState: ShopsState = {
  shops: [],
  currentShop: null
};

export const selectShopsState = createFeatureSelector<ShopsState>('shops');
