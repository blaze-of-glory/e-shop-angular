import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Shop } from '../../../modules/shops/classes/shop';
import { Material } from '../../interfaces/material';
import { Product } from '../../interfaces/product';
import { Employee } from '../../../modules/employees/classes/employee';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() employee: Employee = null;
  @Input() shop: Shop = null;
  @Input() material: Material = null;
  @Input() product: Product = null;

  @Output() openDetailsEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() editEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  openDetails(id: string) {
    this.openDetailsEvent.emit(id);
  }

  edit(card: Employee | Shop) {
    this.editEvent.emit(card);
  }

  delete(id: string) {
    this.deleteEvent.emit(id);
  }
}
