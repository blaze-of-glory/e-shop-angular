import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EmployeesApi } from '../../modules/employees/api/employees.api';
import { ROUTER_NAMES } from '../../shared/constants/router-names';

@Injectable({
  providedIn: 'root'
})
export class CardDetailsResolver implements Resolve<boolean> {
  constructor(private employeesApi: EmployeesApi) { }
  resolve(routeSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    switch (routeSnapshot.routeConfig?.path) {
      case ROUTER_NAMES.EMPLOYEE: {
        return this.employeesApi.getEmployeeById(routeSnapshot.params['employee']);
      }
      default: return of(true);
    }
  }
}
