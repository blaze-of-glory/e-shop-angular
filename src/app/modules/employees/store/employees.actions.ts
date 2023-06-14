import { createAction, props } from '@ngrx/store';
import { Employee } from '../classes/employee';

export const getEmployees = createAction('[Employees] Get employees');
export const setEmployees = createAction('[Employees] Set employees', props<{employees: Employee[]}>());
export const createEmployee = createAction('[Employees] Create employee', props<{currentEmployee: Employee}>());
export const editEmployee = createAction('[Employees] Edit employee', props<{currentEmployee: Employee}>());
export const deleteEmployee= createAction('[Employees] Delete employee', props<{currentEmployee: Employee}>());
export const getEmployeeById= createAction('[Employees] Get employee by id', props<{currentEmployeeId: string}>());
export const setCurrentEmployee = createAction('[Employees] Set current employee', props<{currentEmployee: Employee}>());
