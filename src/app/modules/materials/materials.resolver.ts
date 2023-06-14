import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { setRelatedProviderId } from './store/materials.actions';

@Injectable({
  providedIn: 'root'
})
export class MaterialsResolver implements Resolve<boolean> {

  constructor(private store: Store) { }

  resolve(routeSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.store.dispatch(setRelatedProviderId({ relatedProviderId: routeSnapshot.params['provider'] }));
    return true;
  }
}
