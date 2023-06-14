import { Component, OnDestroy, OnInit } from '@angular/core';
import { Employee } from '../../../modules/employees/classes/employee';
import { Product } from '../../../modules/products/classes/product';
import { SubscriptionsService } from '../../services/subscriptions.service';
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

  constructor(private store: Store, private subscriptionsService: SubscriptionsService) { }

  ngOnInit(): void {
    this.subscriptionsService.next = this.store.select(selectCurrentEmployee).subscribe(currentEmployee => this.employee = currentEmployee);
    this.subscriptionsService.next = this.store.select(selectCurrentProduct).subscribe(currentProduct => this.product = currentProduct);
  }

  ngOnDestroy(): void {
    this.store.dispatch(setCurrentEmployee({ currentEmployee: null }));
    this.store.dispatch(setCurrentProduct({ currentProduct: null }));
    this.subscriptionsService.unsubscribeAll();
  }
}
