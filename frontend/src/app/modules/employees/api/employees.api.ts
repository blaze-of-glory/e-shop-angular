import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Employee } from '../classes/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesApi {

  private readonly apiEndpoint = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiEndpoint + '/employees');
  }

  getEmployeeById(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.apiEndpoint + `/employees/${id}`);
  }

  createEmployee(employeeDetails: any): Observable<Employee> {
    return this.http.post<Employee>(this.apiEndpoint + '/employees', employeeDetails);
  }

  editEmployee(id: string, employeeDetails: any): Observable<Employee> {
    return this.http.put<Employee>(this.apiEndpoint + `/employees/${id}`, employeeDetails);
  }

  deleteEmployee(id: string): Observable<string> {
    return this.http.delete<string>(this.apiEndpoint + `/employees/${id}`);
  }
}
