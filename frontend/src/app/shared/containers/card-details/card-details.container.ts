import { Component, OnDestroy, OnInit } from '@angular/core';
import { Employee } from '../../../modules/employees/classes/employee';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../modules/products/classes/product';
import { EmployeesFacade } from '../../../modules/employees/employees.facade';
import { ProductsFacade } from '../../../modules/products/products.facade';

@Component({
  selector: 'app-card-details-container',
  templateUrl: './card-details.container.html',
  styleUrls: ['./card-details.container.scss']
})
export class CardDetailsContainer implements OnInit, OnDestroy {
  employee: Employee = null;
  product: Product = null;

  constructor(private route: ActivatedRoute, private employeeFacade: EmployeesFacade, private productFacade: ProductsFacade) { }

  ngOnInit(): void {
    this.route.data.pipe().subscribe(resolvedData => {
      this.employee = resolvedData['employee'];
      this.product = resolvedData['product'];
    });

  }

  ngOnDestroy(): void {
    this.employeeFacade.setCurrentEmployee(null);
    this.productFacade.setCurrentProduct(null);
  }
}
