import { Injectable } from '@angular/core';
import { EmployeesApi } from './api/employees.api';
import { EmployeesState } from './state/employees.state';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ROUTER_LINKS } from '../../shared/constants/router-links';
import { Employee } from './classes/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesFacade {

  constructor(private api: EmployeesApi, private state: EmployeesState, private router: Router) { }

  isLoading$(): Observable<boolean> {
    return this.state.isLoading$();
  }

  getEmployees$(): Observable<Employee[]> {
    return this.state.getEmployees$();
  }

  loadEmployees() {
    this.api.getAllEmployees().subscribe((employees: Employee[]) => this.state.setEmployees(employees));
  }

  getCurrentEmployee$(): Observable<Employee> {
    return this.state.getCurrentEmployee$();
  }

  setCurrentEmployee(employee: Employee) {
    this.state.setCurrentEmployee(employee);
  }

  openDetails(id: string) {
    this.router.navigateByUrl(ROUTER_LINKS.EMPLOYEES + `/${id}`);
  }

  addEmployee() {
     this.setCurrentEmployee(new Employee());
  }

  createEmployee(employee: Employee) {
    this.state.setLoading(true);
    this.api.createEmployee(employee).subscribe(
      () => {
        this.loadEmployees();
        this.setCurrentEmployee(null);
      },
      error => console.log(error),
      () => this.state.setLoading(false)
    );
  }

  editEmployee(employee: Employee) {
    this.state.setLoading(true);
    this.api.editEmployee(employee.id, employee).subscribe(
      () => {
        this.loadEmployees();
        this.setCurrentEmployee(null);
      },
      error => console.log(error),
      () => this.state.setLoading(false)
    );
  }

  deleteEmployee(id: string) {
    this.state.setLoading(true);
    this.api.deleteEmployee(id).subscribe(
      () => this.loadEmployees(),
      error => console.log(error),
      () => this.state.setLoading(false)
    );
  }
}
