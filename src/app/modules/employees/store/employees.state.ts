import { Employee } from '../classes/employee';
import { createFeatureSelector } from '@ngrx/store';

export interface EmployeesState {
  employees: Employee[];
  currentEmployee: Employee;
}

export const employeesInitialState: EmployeesState = {
  employees: [],
  currentEmployee: null
}

export const selectEmployeesState = createFeatureSelector<EmployeesState>('employees');
