import { Component, OnDestroy, OnInit } from '@angular/core';
import { Employee } from '../../../../shared/interfaces/employee';
import { EmployeesFacade } from '../../employees.facade';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.container.html',
  styleUrls: ['./employee-list.container.scss']
})
export class EmployeeListContainer implements OnInit, OnDestroy {
  public employees: Employee[] = null;
  private employeeSubscription: Subscription = null;

  constructor(private facade: EmployeesFacade) { }

  ngOnInit(): void {
    this.facade.loadEmployees();
    this.employeeSubscription = this.facade.getEmployees$().subscribe(employees => {
      this.employees = employees;
    });
  }

  ngOnDestroy(): void {
    this.employeeSubscription.unsubscribe();
  }

  openDetails(id: string) {
    this.facade.openDetails(id);
  }

  deleteEmployee(id: string) {
    this.facade.deleteEmployee(id);
  }

  addEmployee() {
    this.facade.addEmployee();
  }
}
