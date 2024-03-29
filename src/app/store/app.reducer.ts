import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { shopsReducer } from '../modules/shops/store/shops.reducer';
import { employeesReducer } from '../modules/employees/store/employees.reducer';
import { providersReducer } from '../modules/providers/store/providers.reducer';
import { materialsReducer } from '../modules/materials/store/materials.reducer';
import { productsReducer } from '../modules/products/store/products.reducer';

export const reducers: ActionReducerMap<AppState> = {
  shops: shopsReducer,
  employees: employeesReducer,
  providers: providersReducer,
  materials: materialsReducer,
  products: productsReducer
};
