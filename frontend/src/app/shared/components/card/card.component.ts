import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Shop } from '../../../modules/shops/classes/shop';
import { Material } from '../../../modules/materials/classes/material';
import { Product } from '../../../modules/products/classes/product';
import { Employee } from '../../../modules/employees/classes/employee';
import { Provider } from '../../../modules/providers/classes/provider';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() employee: Employee = null;
  @Input() shop: Shop = null;
  @Input() provider: Provider = null;
  @Input() material: Material = null;
  @Input() product: Product = null;

  @Output() openDetailsEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() editEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter<any>();

  openDetails<Type>(details: Type) {
    this.openDetailsEvent.emit(details);
  }

  edit<Type>(card: Type) {
    this.editEvent.emit(card);
  }

  delete<Type>(card: Type) {
    this.deleteEvent.emit(card);
  }
}
