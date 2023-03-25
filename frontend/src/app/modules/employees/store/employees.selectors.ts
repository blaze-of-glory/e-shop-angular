import { createSelector } from '@ngrx/store';
import { EmployeesState, selectEmployeesState } from './employees.state';

export const selectAllEmployees = createSelector(
  selectEmployeesState,
  (state: EmployeesState) => state.employees
);

export const selectCurrentEmployee = createSelector(
  selectEmployeesState,
  (state: EmployeesState) => state.currentEmployee
);
