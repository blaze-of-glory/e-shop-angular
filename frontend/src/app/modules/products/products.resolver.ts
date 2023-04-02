import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { setRelatedMaterialId, setRelatedProviderId } from './store/products.actions';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<boolean> {

  constructor(private store: Store) { }

  resolve(routeSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.store.dispatch(setRelatedProviderId({ relatedProviderId: routeSnapshot.params['provider'] }));
    this.store.dispatch(setRelatedMaterialId({ relatedMaterialId: routeSnapshot.params['material'] }));
    return true;
  }
}
