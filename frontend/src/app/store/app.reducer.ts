import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { shopsReducer } from '../modules/shops/store/shops.reducer';

export const reducers: ActionReducerMap<AppState> = {
  shops: shopsReducer
};
