import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeesFacade } from '../../employees.facade';
import { Employee } from '../../classes/employee';
import { SubscriptionHelper } from '../../../../shared/helpers/subscription.helper';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.container.html',
  styleUrls: ['./employee-list.container.scss']
})
export class EmployeeListContainer implements OnInit, OnDestroy {
  public employees: Employee[] = null;
  public employee: Employee = null;
  private readonly subscriptionHelper: SubscriptionHelper = new SubscriptionHelper();

  constructor(private facade: EmployeesFacade) { }

  ngOnInit(): void {
    this.facade.setEmployees();
    this.subscriptionHelper.next = this.facade.getEmployees$().subscribe(employees => {
      this.employees = employees;
    });
    this.subscriptionHelper.next = this.facade.getCurrentEmployee$().subscribe(employee => {
      this.employee = employee;
    });
  }

  ngOnDestroy(): void {
    this.subscriptionHelper.unsubscribeAll();
  }

  openDetails(details: Employee) {
    this.setCurrentEmployee(details);
    this.facade.openDetails(details.id);
  }

  deleteEmployee(employee: Employee) {
    this.facade.deleteEmployee(employee);
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
