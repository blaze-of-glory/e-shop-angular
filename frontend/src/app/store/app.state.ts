import { ShopsState } from '../modules/shops/store/shops.state';
import { EmployeesState } from '../modules/employees/store/employees.state';

export interface AppState {
  shops?: ShopsState;
  employees?: EmployeesState
}
