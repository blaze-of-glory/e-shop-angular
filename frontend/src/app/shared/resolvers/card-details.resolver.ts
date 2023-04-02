import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { EmployeesApi } from '../../modules/employees/api/employees.api';
import { ROUTER_NAMES } from '../constants/router-names';
import { Store } from '@ngrx/store';
import { getEmployeeById } from '../../modules/employees/store/employees.actions';
import { getProductById } from '../../modules/products/store/products.actions';

@Injectable({
  providedIn: 'root'
})
export class CardDetailsResolver implements Resolve<boolean> {
  constructor(private employeesApi: EmployeesApi, private store: Store) { }
  resolve(routeSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    switch (routeSnapshot.routeConfig?.path) {
      case ROUTER_NAMES.EMPLOYEE: {
        this.store.dispatch(getEmployeeById({currentEmployeeId: routeSnapshot.params['employee']}));
        return true;
      }
      case ROUTER_NAMES.PRODUCT: {
        this.store.dispatch(getProductById({currentProductId: routeSnapshot.params['product']}))
        return true;
      }
      default: return true;
    }
  }
}
