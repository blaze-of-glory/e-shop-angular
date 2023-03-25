import { Injectable } from '@angular/core';
import { EmployeesApi } from './api/employees.api';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ROUTER_LINKS } from '../../shared/constants/router-links';
import { Employee } from './classes/employee';
import { Store } from '@ngrx/store';
import { createEmployee, deleteEmployee, editEmployee, getEmployees, setCurrentEmployee } from './store/employees.actions';
import { selectAllEmployees, selectCurrentEmployee } from './store/employees.selectors';

@Injectable({
  providedIn: 'root'
})
export class EmployeesFacade {

  constructor(private api: EmployeesApi, private store: Store, private router: Router) { }

  getEmployees$(): Observable<Employee[]> {
    return this.store.select(selectAllEmployees);
  }

  setEmployees() {
    this.store.dispatch(getEmployees())
  }

  getCurrentEmployee$(): Observable<Employee> {
    return this.store.select(selectCurrentEmployee);
  }

  setCurrentEmployee(currentEmployee: Employee) {
    this.store.dispatch(setCurrentEmployee({ currentEmployee }));
  }

  openDetails(id: string) {
    this.router.navigateByUrl(ROUTER_LINKS.EMPLOYEES + `/${id}`);
  }

  addEmployee() {
    this.setCurrentEmployee(new Employee());
  }

  createEmployee(currentEmployee: Employee) {
    this.store.dispatch(createEmployee({ currentEmployee }));
    this.setCurrentEmployee(null);
  }

  editEmployee(currentEmployee: Employee) {
    this.store.dispatch(editEmployee({ currentEmployee }));
    this.setCurrentEmployee(null);
  }

  deleteEmployee(currentEmployee: Employee) {
    this.store.dispatch(deleteEmployee({ currentEmployee }));
  }
}
