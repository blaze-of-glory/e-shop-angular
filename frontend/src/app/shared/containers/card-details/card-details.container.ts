import { Component, OnDestroy, OnInit } from '@angular/core';
import { Employee } from '../../../modules/employees/classes/employee';
import { Product } from '../../../modules/products/classes/product';
import { EmployeesFacade } from '../../../modules/employees/employees.facade';
import { ProductsFacade } from '../../../modules/products/products.facade';
import { SubscriptionHelper } from '../../helpers/subscription.helper';

@Component({
  selector: 'app-card-details-container',
  templateUrl: './card-details.container.html',
  styleUrls: ['./card-details.container.scss']
})
export class CardDetailsContainer implements OnInit, OnDestroy {
  employee: Employee = null;
  product: Product = null;
  private readonly subscriptionHelper: SubscriptionHelper = new SubscriptionHelper();

  constructor(private employeeFacade: EmployeesFacade, private productFacade: ProductsFacade) { }

  ngOnInit(): void {
    this.subscriptionHelper.next = this.employeeFacade.getCurrentEmployee$().subscribe(currentEmployee => this.employee = currentEmployee);
    this.subscriptionHelper.next = this.productFacade.getCurrentProduct$().subscribe(currentProduct => this.product = currentProduct);
  }

  ngOnDestroy(): void {
    this.employeeFacade.setCurrentEmployee(null);
    this.productFacade.setCurrentProduct(null);
    this.subscriptionHelper.unsubscribeAll();
  }
}
