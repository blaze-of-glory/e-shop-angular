import { ShopsState } from '../modules/shops/store/shops.state';
import { EmployeesState } from '../modules/employees/store/employees.state';
import { ProductsState } from '../modules/products/store/products.state';

export interface AppState {
  shops?: ShopsState;
  employees?: EmployeesState;
  products?: ProductsState
}
