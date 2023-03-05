import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ApiService } from '../api.service';
import { ROUTER_NAMES } from '../../shared/constants/router-names';

@Injectable({
  providedIn: 'root'
})
export class CatalogResolver implements Resolve<any> {
  constructor(private apiService: ApiService) {  }
  resolve(routeSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    switch (routeSnapshot.routeConfig?.path) {
      case ROUTER_NAMES.PRODUCTS : {
        return this.apiService.getFilteredProducts(routeSnapshot.params['provider'],routeSnapshot.params['material']);
      }
      default: return of(true);
    }
  }
}
