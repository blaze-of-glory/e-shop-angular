import { Component, OnDestroy, OnInit } from '@angular/core';
import { Employee } from '../../classes/employee';
import { SubscriptionsService } from '../../../../shared/services/subscriptions.service';
import { Store } from '@ngrx/store';
import { createEmployee, deleteEmployee, editEmployee, getEmployees, setCurrentEmployee } from '../../store/employees.actions';
import { selectAllEmployees, selectCurrentEmployee } from '../../store/employees.selectors';
import { Router } from '@angular/router';
import { ROUTER_LINKS } from '../../../../shared/constants/router-links';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.container.html',
  styleUrls: ['./employee-list.container.scss']
})
export class EmployeeListContainer implements OnInit, OnDestroy {
  public employees: Employee[] = null;
  public employee: Employee = null;

  constructor(private store: Store, private router: Router, private subscriptionsService: SubscriptionsService) { }

  ngOnInit(): void {
    this.store.dispatch(getEmployees())
    this.subscriptionsService.next = this.store.select(selectAllEmployees).subscribe(employees => {
      this.employees = employees;
    });
    this.subscriptionsService.next = this.store.select(selectCurrentEmployee).subscribe(employee => {
      this.employee = employee;
    });
  }

  ngOnDestroy(): void {
    this.subscriptionsService.unsubscribeAll();
  }

  openDetails(details: Employee) {
    this.setCurrentEmployee(details);
    void this.router.navigateByUrl(ROUTER_LINKS.EMPLOYEES + `/${details.id}`);
  }

  deleteEmployee(currentEmployee: Employee) {
    this.store.dispatch(deleteEmployee({ currentEmployee }));
  }

  addEmployee() {
    this.setCurrentEmployee(new Employee());
  }

  setCurrentEmployee(currentEmployee: Employee) {
    this.store.dispatch(setCurrentEmployee({ currentEmployee }));
  }

  cancel() {
    this.setCurrentEmployee(null);
  }

  createEmployee(currentEmployee: Employee) {
    this.store.dispatch(createEmployee({ currentEmployee }));
    this.setCurrentEmployee(null);
  }

  editEmployee(currentEmployee: Employee) {
    this.store.dispatch(editEmployee({ currentEmployee }));
    this.setCurrentEmployee(null);
  }

  isCreationMode(): boolean {
    return this.employee instanceof Employee;
  }
}
