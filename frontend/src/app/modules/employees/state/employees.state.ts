import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from '../../../shared/interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesState {
  private _loading$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _employees$: BehaviorSubject<Employee[]> = new BehaviorSubject<Employee[]>(null);
  private _currentEmployee$: BehaviorSubject<Employee> = new BehaviorSubject<Employee>(null);

  isLoading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  setLoading(isUpdating: boolean) {
    this._loading$.next(isUpdating);
  }

  getEmployees$(): Observable<Employee[]> {
    return this._employees$.asObservable();
  }

  setEmployees(employees: Employee[]) {
    this._employees$.next(employees);
  }

  getCurrentEmployee$(): Observable<Employee> {
    return this._currentEmployee$.asObservable();
  }

  setCurrentEmployee(employee: Employee) {
    this._currentEmployee$.next(employee);
  }
}
