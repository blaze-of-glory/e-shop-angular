import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Employee } from '../../../modules/employees/classes/employee';
import { Shop } from '../../../modules/shops/classes/shop';
import { Provider } from '../../../modules/providers/classes/provider';
import { Material } from '../../../modules/materials/classes/material';
import { Product } from '../../../modules/products/classes/product';
import { ManipulatorFormStrategy } from '../../interfaces/manipulator-form-strategy.interface';
import { manipulatorFormStrategyMapping } from '../../constants/manipulator-form-strategy-mapping';
import { ManipulatorFormStrategyMapping, Instances } from '../../types/types';

@Component({
  selector: 'app-manipulator',
  templateUrl: './manipulator.component.html',
  styleUrls: ['./manipulator.component.scss']
})
export class ManipulatorComponent implements OnInit {
  @Input() employee: Employee = null;
  @Input() shop: Shop = null;
  @Input() provider: Provider = null;
  @Input() material: Material = null;
  @Input() product: Product = null;
  @Input() creationMode: boolean;

  @Output() cancelEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() creationResultEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() editionResultEvent: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;
  title: string;
  recordId: string;

  ngOnInit(): void {
    const key: string = Object.keys(manipulatorFormStrategyMapping).find((key: string) => this[key as keyof ManipulatorComponent]);
    if (!key) return;

    const data: Instances = this[key as keyof ManipulatorComponent] as Instances;
    const strategy: ManipulatorFormStrategy<Instances> = new manipulatorFormStrategyMapping[key as keyof ManipulatorFormStrategyMapping].strategy;
    this.title = this.creationMode ? manipulatorFormStrategyMapping[key as keyof ManipulatorFormStrategyMapping].creationTitle : manipulatorFormStrategyMapping[key as keyof ManipulatorFormStrategyMapping].editTitle;
    this.recordId = this.creationMode ? null : data.id;

    if (strategy) this.form = strategy.createForm(data);
  }

  manipulate() {
    this.creationMode ? this.creationResultEvent.emit(this.form.value) : this.editionResultEvent.emit({ ...this.form.value, id: this.recordId })
  }

  cancel() {
    this.cancelEvent.emit(true);
  }
}
