import { EmployeeListContainer } from "./employee-list.container";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SubscriptionsService } from "../../../../shared/services/subscriptions.service";
import { Router } from "@angular/router";
import { Employee } from "../../classes/employee";
import { ROUTER_LINKS } from "../../../../shared/constants/router-links";
import { createEmployee, deleteEmployee, editEmployee, getEmployees, setCurrentEmployee } from "../../store/employees.actions";
import { EmployeesState } from "../../store/employees.state";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { selectAllEmployees, selectCurrentEmployee } from "../../store/employees.selectors";

describe('EmployeeListContainer', function () {
  let component: EmployeeListContainer;
  let fixture: ComponentFixture<EmployeeListContainer>;
  let store: MockStore;
  let router: jasmine.SpyObj<Router>;
  let subscriptionsService: jasmine.SpyObj<SubscriptionsService>;
  const initialState: EmployeesState = { employees: [], currentEmployee: null };

  beforeEach(function () {
    router = jasmine.createSpyObj('Router', ['navigateByUrl']);
    subscriptionsService = jasmine.createSpyObj('SubscriptionsService', ['next', 'unsubscribeAll']);

    TestBed.configureTestingModule({
      declarations: [EmployeeListContainer],
      providers: [
        provideMockStore({ initialState }),
        { provide: Router, useValue: router },
        { provide: SubscriptionsService, useValue: subscriptionsService },
      ]
    });

    fixture = TestBed.createComponent(EmployeeListContainer);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);

    spyOn(store, 'dispatch');
  })

  it('should create',  function (){
    expect(component).toBeTruthy();
  });

  it('should getEmployees on init', function () {
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(getEmployees());
  });

  it('should select all employees from the store on init', function () {
    const employees: Employee[] = [{id: '1', name: 'Joe', surname: 'Doe', age: 30, salary: 100, position: 'regular', img: 'test'}];
    store.overrideSelector(selectAllEmployees, employees);
    component.ngOnInit();
    expect(component.employees).toEqual(employees);
  });

  it('should select current employee from the store on init', function () {
    const employee: Employee = {id: '1', name: 'Joe', surname: 'Doe', age: 30, salary: 100, position: 'regular', img: 'test'};
    store.overrideSelector(selectCurrentEmployee, employee);
    component.ngOnInit();
    expect(component.employee).toEqual(employee);
  });

  it('should cache specified user and navigate to it page', function () {
    const specifiedEmployee: Employee = { id: '1', name: 'Joe', surname: 'Doe', age: 30, salary: 100, position: 'regular', img: 'test' };

    component.openDetails(specifiedEmployee);

    expect(store.dispatch).toHaveBeenCalledWith(setCurrentEmployee({ currentEmployee: specifiedEmployee }));
    expect(router.navigateByUrl).toHaveBeenCalledWith(ROUTER_LINKS.EMPLOYEES + `/${specifiedEmployee.id}`);
  });

  it('should delete specified employee', function () {
    const specifiedEmployee: Employee = { id: '1', name: 'Joe', surname: 'Doe', age: 30, salary: 100, position: 'regular', img: 'test' };

    component.deleteEmployee(specifiedEmployee);

    expect(store.dispatch).toHaveBeenCalledWith(deleteEmployee({ currentEmployee: specifiedEmployee }))
  });

  it('should cache new empty employee', function () {
    component.addEmployee();

    expect(store.dispatch).toHaveBeenCalledWith(setCurrentEmployee({ currentEmployee: new Employee()}));
  });

  it('should cache specified employee', function () {
    const specifiedEmployee: Employee = { id: '1', name: 'Joe', surname: 'Doe', age: 30, salary: 100, position: 'regular', img: 'test' };

    component.setCurrentEmployee(specifiedEmployee);

    expect(store.dispatch).toHaveBeenCalledWith(setCurrentEmployee({ currentEmployee: specifiedEmployee }));
  });

  it('should clear a cached employee', function () {
    component.cancel();

    expect(store.dispatch).toHaveBeenCalledWith(setCurrentEmployee({ currentEmployee: null }));
  });

  it('should  create a new employee and clear it form cache', function () {
    const specifiedEmployee: Employee = {  name: 'Joe', surname: 'Doe', age: 30, salary: 100, position: 'regular', img: 'test' };

    component.createEmployee(specifiedEmployee);

    expect(store.dispatch).toHaveBeenCalledWith(createEmployee({ currentEmployee: specifiedEmployee }));
    expect(store.dispatch).toHaveBeenCalledWith(setCurrentEmployee({ currentEmployee: null }));
  });

  it('should edit specified user and clear it from cache', function () {
    const specifiedEmployee: Employee = { id: '1', name: 'Joe', surname: 'Doe', age: 30, salary: 100, position: 'regular', img: 'test' };

    component.editEmployee(specifiedEmployee);

    expect(store.dispatch).toHaveBeenCalledWith(editEmployee({ currentEmployee: specifiedEmployee }));
    expect(store.dispatch).toHaveBeenCalledWith(setCurrentEmployee({ currentEmployee: null }));
  });

  it('should return true if it is creation mode', function () {
    component.employee = new Employee();

    expect(component.isCreationMode()).toBeTruthy();
  });

  it('should return true if it is edition mode', function () {
    component.employee = { id: '1', name: 'Joe', surname: 'Doe', age: 30, salary: 100, position: 'regular', img: 'test' };

    expect(component.isCreationMode()).toBeFalse();
  });
})
