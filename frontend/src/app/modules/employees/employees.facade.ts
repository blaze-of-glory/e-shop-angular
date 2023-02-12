import { Injectable } from '@angular/core';
import { EmployeesApi } from './api/employees.api';
import { EmployeesState } from './state/employees.state';
import { map, Observable, take, tap } from 'rxjs';
import { Employee } from '../../shared/interfaces/employee';
import { Router } from '@angular/router';
import { ROUTER_LINKS } from '../../shared/constants/router-links';

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

  setCurrentEmployee(id: string | null) {
    if (id) {
      this.getEmployees$().pipe(
        map(employees => employees.find(employee => employee.id === id)),
        tap((currentEmployee: Employee) => this.state.setCurrentEmployee(currentEmployee))
      ).subscribe();
    } else {
      this.state.setCurrentEmployee(null);
    }
  }

  openDetails(id: string) {
    this.setCurrentEmployee(id);
    this.getCurrentEmployee$().pipe(take(1)).subscribe(employee => {
      console.log(employee);
    });
  }

  addEmployee() {
     this.router.navigateByUrl(ROUTER_LINKS.ADD + '/employee');
  }

  editEmployee(id: string) {
    this.setCurrentEmployee(id);
    this.getCurrentEmployee$().pipe(take(1)).subscribe(employee => {
      console.log(employee);
    });
  }

  // createEmployee(employee: Employee) {
  //   this.state.setLoading(true);
  //   this.api.createEmployee(employee).subscribe(
  //     () => this.loadEmployees(),
  //     error => console.log(error),
  //     () => this.state.setLoading(false)
  //   );
  // }
  //
  // updateEmployee(employee: Employee) {
  //   this.state.setLoading(true);
  //   this.api.editEmployee(employee.id, employee).subscribe(
  //     () => this.loadEmployees(),
  //     error => console.log(error),
  //     () => this.state.setLoading(false)
  //   );
  // }

  deleteEmployee(id: string) {
    this.state.setLoading(true);
    this.api.deleteEmployee(id).subscribe(
      () => this.loadEmployees(),
      error => console.log(error),
      () => this.state.setLoading(false)
    );
  }

}
