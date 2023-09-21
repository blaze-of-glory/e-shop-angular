import { EmployeesApi } from "./employees.api";
import { HttpClientTestingModule, HttpTestingController, TestRequest } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { Employee } from "../classes/employee";

describe('EmployeesApiService', function () {
  let service: EmployeesApi;
  let httpMock: HttpTestingController;

  beforeEach(function () {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeesApi]
    });


    service = TestBed.inject(EmployeesApi);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(function () {
    httpMock.verify();
  });

  it('should retrieve all employees', function () {
    const expectedEmployees: Employee[] = [
      { id: '1', name: 'Joe', surname: 'Doe', age: 30, salary: 100, position: 'regular', img: 'test' },
    ];

    service.getAllEmployees().subscribe(employees => {
      expect(employees).toEqual(expectedEmployees);
    });

    const req: TestRequest = httpMock.expectOne(service['apiEndpoint'] + '/employees');

    expect(req.request.method).toEqual('GET');

    req.flush(expectedEmployees);
  });

  it('should retrieve requested employee', function () {
    const expectedEmployee: Employee =
      { id: '1', name: 'Joe', surname: 'Doe', age: 30, salary: 100, position: 'regular', img: 'test' };

    const employeeId: string = '1';

    service.getEmployeeById(employeeId).subscribe(employee => {
      expect(employee).toEqual(expectedEmployee);
    });

    const req: TestRequest = httpMock.expectOne(service['apiEndpoint'] + `/employees/${employeeId}`);

    expect(req.request.method).toEqual('GET');

    req.flush(expectedEmployee);
  });

  it('should create a new employee', function () {
    const employeeDetails: Employee =
      { name: 'Joe', surname: 'Doe', age: 30, salary: 100, position: 'regular', img: 'test' };

    const newEmployee: Employee =
      { id: '1', name: 'Joe', surname: 'Doe', age: 30, salary: 100, position: 'regular', img: 'test' };

    service.createEmployee(employeeDetails).subscribe(employee => {
      expect(employee).toEqual(newEmployee);
    });

    const req: TestRequest = httpMock.expectOne(service['apiEndpoint'] + '/employees');

    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(employeeDetails);

    req.flush(newEmployee);
  });

  it('should edit employee info by id', function () {
    const updatedEmployeeDetails: Employee =
      { name: 'Joe', surname: 'Doe', age: 30, salary: 100, position: 'regular', img: 'test' };

    const employeeId: string = '1';

    service.editEmployee(employeeId, updatedEmployeeDetails).subscribe(updatedEmployee => {
      expect(updatedEmployee).toEqual(updatedEmployeeDetails);
    });

    const req: TestRequest = httpMock.expectOne(service['apiEndpoint'] + `/employees/${employeeId}`);

    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(updatedEmployeeDetails);

    req.flush(updatedEmployeeDetails);
  });

  it('should delete employee by id', function () {
    const employeeId: string = '1';

    service.deleteEmployee(employeeId).subscribe( response => {
      expect(response).toEqual(employeeId);
    })

    const req: TestRequest = httpMock.expectOne(service['apiEndpoint'] + `/employees/${employeeId}`);

    expect(req.request.method).toEqual('DELETE');

    req.flush(employeeId);
  });
});
