import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { shopsReducer } from '../modules/shops/store/shops.reducer';
import { employeesReducer } from '../modules/employees/store/employees.reducer';

export const reducers: ActionReducerMap<AppState> = {
  shops: shopsReducer,
  employees: employeesReducer
};
