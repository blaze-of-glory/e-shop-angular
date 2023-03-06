import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeesFacade } from '../../employees.facade';
import { Subscription } from 'rxjs';
import { Employee } from '../../classes/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.container.html',
  styleUrls: ['./employee-list.container.scss']
})
export class EmployeeListContainer implements OnInit, OnDestroy {
  public employees: Employee[] = null;
  public employee: Employee = null;
  private employeesSubscription: Subscription = null;
  private employeeSubscription: Subscription = null;

  constructor(private facade: EmployeesFacade) { }

  ngOnInit(): void {
    this.facade.loadEmployees();
    this.employeesSubscription = this.facade.getEmployees$().subscribe(employees => {
      this.employees = employees;
    });
    this.employeeSubscription = this.facade.getCurrentEmployee$().subscribe(employee => {
      this.employee = employee;
    })
  }

  ngOnDestroy(): void {
    this.employeesSubscription.unsubscribe();
    this.employeeSubscription.unsubscribe();
  }

  openDetails(details: Employee) {
    this.setCurrentEmployee(details);
    this.facade.openDetails(details.id);
  }

  deleteEmployee(id: string) {
    this.facade.deleteEmployee(id);
  }

  addEmployee() {
    this.facade.addEmployee();
  }

  setCurrentEmployee(employee: Employee) {
    this.facade.setCurrentEmployee(employee);
  }

  cancel() {
    this.facade.setCurrentEmployee(null);
  }

  createEmployee(employee: Employee) {
    this.facade.createEmployee(employee);
  }

  editEmployee(employee: Employee) {
    this.facade.editEmployee(employee);
  }

  isCreationMode(): boolean {
    return this.employee instanceof Employee;
  }
}
