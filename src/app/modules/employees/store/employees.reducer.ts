import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { employeesInitialState, EmployeesState } from './employees.state';
import { setCurrentEmployee, setEmployees } from './employees.actions';

export const createEmployeesReducer: ActionReducer<EmployeesState> = createReducer<EmployeesState>(
  employeesInitialState,
  on(setEmployees, (state, action) => ({
    ...state,
    employees: action.employees
  })),
  on(setCurrentEmployee, (state, action) => ({
    ...state,
    currentEmployee: action.currentEmployee
  }))
);

export const employeesReducer = (state: EmployeesState | undefined, action: Action) => createEmployeesReducer(state, action);
