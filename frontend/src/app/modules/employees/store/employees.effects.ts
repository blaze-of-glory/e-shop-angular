import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EmployeesApi } from '../api/employees.api';
import { createEmployee, deleteEmployee, editEmployee, getEmployeeById, getEmployees, setCurrentEmployee, setEmployees } from './employees.actions';
import { concatMap, map, mergeMap } from 'rxjs';
import { Employee } from '../classes/employee';

@Injectable()
export class EmployeesEffects {
  getEmployees$ = createEffect(
    () => this.actions$.pipe(
      ofType(getEmployees),
      mergeMap(() => this.api.getAllEmployees()
        .pipe(
          map(employees => setEmployees({employees}))
        )
      )
    )
  );

  getEmployeeById$ = createEffect(
    () => this.actions$.pipe(
      ofType(getEmployeeById),
      concatMap((payload: { currentEmployee: Employee }) => this.api.getEmployeeById(payload.currentEmployee.id)
        .pipe(
          map(currentEmployee => setCurrentEmployee({ currentEmployee }))
        )
      )
    )
  );

  createEmployee$ = createEffect(
    () => this.actions$.pipe(
      ofType(createEmployee),
      concatMap((payload: { currentEmployee: Employee }) => this.api.createEmployee(payload.currentEmployee)
        .pipe(
          map(() => getEmployees())
        )
      )
    )
  );

  editEmployee$ = createEffect(
    () => this.actions$.pipe(
      ofType(editEmployee),
      concatMap((payload: { currentEmployee: Employee }) => this.api.editEmployee(payload.currentEmployee.id, payload.currentEmployee)
        .pipe(
          map(() => getEmployees())
        )
      )
    )
  );

  deleteEmployee$ = createEffect(
    () => this.actions$.pipe(
      ofType(deleteEmployee),
      concatMap((payload: { currentEmployee: Employee }) => this.api.deleteEmployee(payload.currentEmployee.id)
        .pipe(
          map(() => getEmployees())
        )
      )
    )
  );

  constructor(private actions$: Actions, private api: EmployeesApi) { }
}
