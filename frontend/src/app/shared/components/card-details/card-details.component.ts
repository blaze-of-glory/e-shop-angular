import { Component, Input } from '@angular/core';
import { Employee } from '../../interfaces/employee';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent {
  @Input() employee: Employee = null;

  constructor() { }
}
