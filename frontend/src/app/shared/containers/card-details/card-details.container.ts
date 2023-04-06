import { Component, OnDestroy, OnInit } from '@angular/core';
import { Employee } from '../../../modules/employees/classes/employee';
import { Product } from '../../../modules/products/classes/product';
import { SubscriptionHelper } from '../../helpers/subscription.helper';
import { Store } from '@ngrx/store';
import { selectCurrentEmployee } from '../../../modules/employees/store/employees.selectors';
import { setCurrentEmployee } from '../../../modules/employees/store/employees.actions';
import { selectCurrentProduct } from '../../../modules/products/store/products.selectors';
import { setCurrentProduct } from '../../../modules/products/store/products.actions';

@Component({
  selector: 'app-card-details-container',
  templateUrl: './card-details.container.html',
  styleUrls: ['./card-details.container.scss']
})
export class CardDetailsContainer implements OnInit, OnDestroy {
  employee: Employee = null;
  product: Product = null;
  private readonly subscriptionHelper: SubscriptionHelper = new SubscriptionHelper();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.subscriptionHelper.next = this.store.select(selectCurrentEmployee).subscribe(currentEmployee => this.employee = currentEmployee);
    this.subscriptionHelper.next = this.store.select(selectCurrentProduct).subscribe(currentProduct => this.product = currentProduct);
  }

  ngOnDestroy(): void {
    this.store.dispatch(setCurrentEmployee({ currentEmployee: null }));
    this.store.dispatch(setCurrentProduct({ currentProduct: null }));
    this.subscriptionHelper.unsubscribeAll();
  }
}
