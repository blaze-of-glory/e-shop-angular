import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { CardDetailsResolver } from "./card-details.resolver";
import { ROUTER_NAMES } from "../constants/router-names";
import { getEmployeeById } from "../../modules/employees/store/employees.actions";
import { getProductById } from "../../modules/products/store/products.actions";


describe('CardDetailsResolver', function () {
  let resolver: CardDetailsResolver;
  let store: Store;

  beforeEach(function () {
    TestBed.configureTestingModule({
      providers: [
        CardDetailsResolver,
        {provide: Store, useValue: jasmine.createSpyObj('Store', ['dispatch'])}
      ]
    });

    resolver = TestBed.inject(CardDetailsResolver);
    store = TestBed.inject(Store);
  });

  it('should dispatch getEmployeeById if path contains employeeId', function () {
    const routeSnapshot: ActivatedRouteSnapshot = {routeConfig: {path: ROUTER_NAMES.EMPLOYEE}, params: {'employee': '1'}} as unknown as ActivatedRouteSnapshot;
    const state: RouterStateSnapshot = {} as RouterStateSnapshot;

    resolver.resolve(routeSnapshot, state);

    expect(store.dispatch).toHaveBeenCalledWith(getEmployeeById({currentEmployeeId: '1'}));
  });

  it('should dispatch getProductById if path contains productId', function () {
    const routeSnapshot: ActivatedRouteSnapshot = {routeConfig: {path: ROUTER_NAMES.PRODUCT}, params: {'product': '1'}} as unknown as ActivatedRouteSnapshot;
    const state: RouterStateSnapshot = {} as RouterStateSnapshot;

    resolver.resolve(routeSnapshot, state);

    expect(store.dispatch).toHaveBeenCalledWith(getProductById({currentProductId: '1'}));
  });

  it('should ignore irrelevant cases', function () {
    const routeSnapshot: ActivatedRouteSnapshot = {routeConfig: {path: ROUTER_NAMES.PROVIDERS}} as unknown as ActivatedRouteSnapshot;
    const state: RouterStateSnapshot = {} as RouterStateSnapshot;

    const result: boolean = resolver.resolve(routeSnapshot, state);

    expect(result).toBe(true);
    expect(store.dispatch).not.toHaveBeenCalled();
  });
});
