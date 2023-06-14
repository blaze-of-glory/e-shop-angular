import { Component, Input } from '@angular/core';
import { Employee } from '../../../modules/employees/classes/employee';
import { Product } from '../../../modules/products/classes/product';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent {
  @Input() employee: Employee = null;
  @Input() product: Product = null;
}
