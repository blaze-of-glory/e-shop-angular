import { ShopsState } from '../modules/shops/store/shops.state';
import { EmployeesState } from '../modules/employees/store/employees.state';
import { ProvidersState } from '../modules/providers/store/providers.state';
import { MaterialsState } from '../modules/materials/store/materials.state';

export interface AppState {
  shops?: ShopsState;
  employees?: EmployeesState;
  providers?: ProvidersState;
  materials?: MaterialsState
}
