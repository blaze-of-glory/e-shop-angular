import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Shop } from '../../../modules/shops/classes/shop';
import { Material } from '../../../modules/materials/classes/material';
import { Product } from '../../interfaces/product';
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

  @Output() openDetailsEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() editEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteEvent: EventEmitter<string> = new EventEmitter<string>();

  openDetails(id: string) {
    this.openDetailsEvent.emit(id);
  }

  edit(card: Employee | Shop | Provider | Material) {
    this.editEvent.emit(card);
  }

  delete(id: string) {
    this.deleteEvent.emit(id);
  }
}
