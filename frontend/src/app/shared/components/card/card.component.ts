import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Shop } from '../../../modules/shops/classes/shop';
import { Product } from '../../../modules/products/classes/product';
import { Employee } from '../../../modules/employees/classes/employee';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() employee: Employee = null;
  @Input() shop: Shop = null;
  @Input() product: Product = null;

  @Output() openDetailsEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() editEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter<any>();

  openDetails(details: Employee | Product) {
    this.openDetailsEvent.emit(details);
  }

  edit(card: Employee | Shop | Product) {
    this.editEvent.emit(card);
  }

  delete(card: any) {
    this.deleteEvent.emit(card);
  }
}
