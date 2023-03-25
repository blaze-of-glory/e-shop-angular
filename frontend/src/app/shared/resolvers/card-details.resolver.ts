import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EmployeesApi } from '../../modules/employees/api/employees.api';
import { ROUTER_NAMES } from '../constants/router-names';
import { ProductsApi } from '../../modules/products/api/products.api';
import { Store } from '@ngrx/store';
import { getEmployeeById } from '../../modules/employees/store/employees.actions';
import { selectCurrentEmployee } from '../../modules/employees/store/employees.selectors';

@Injectable({
  providedIn: 'root'
})
export class CardDetailsResolver implements Resolve<boolean> {
  constructor(private employeesApi: EmployeesApi, private productsApi: ProductsApi, private store: Store) { }
  resolve(routeSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    switch (routeSnapshot.routeConfig?.path) {
      case ROUTER_NAMES.EMPLOYEE: {
        this.store.dispatch(getEmployeeById(routeSnapshot.params['employee']));
        return this.store.select(selectCurrentEmployee);
      }
      case ROUTER_NAMES.PRODUCT: {
        return this.productsApi.getProductById(routeSnapshot.params['product']);
      }
      default: return of(true);
    }
  }
}
