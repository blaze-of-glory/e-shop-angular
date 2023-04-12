import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../../modules/employees/classes/employee';
import { Shop } from '../../../modules/shops/classes/shop';
import { Product } from '../../../modules/products/classes/product';

@Component({
  selector: 'app-manipulator',
  templateUrl: './manipulator.component.html',
  styleUrls: ['./manipulator.component.scss']
})
export class ManipulatorComponent implements OnInit {
  @Input() employee: Employee = null;
  @Input() shop: Shop = null;
  @Input() product: Product = null;
  @Input() creationMode: boolean;

  @Output() cancelEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() creationResultEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() editionResultEvent: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;
  title: string;
  recordId: string;

  constructor(private fb: FormBuilder ) { }

  ngOnInit(): void {
    switch (true) {
      case !!this.employee: {
        this.form = this.fb.group({
          img: [this.employee.img, [Validators.required]],
          name: [this.employee.name, [Validators.required]],
          surname: [this.employee.surname, [Validators.required]],
          age: [this.employee.age, [Validators.required]],
          position: [this.employee.position, [Validators.required]],
          salary: [this.employee.salary, [Validators.required]]
        });
        this.creationMode ? this.title = 'Создание сотрудника' : this.title = 'Редактирование сотрудника';
        this.creationMode ? this.recordId = null : this.recordId = this.employee.id;
        break;
      }
      case !!this.shop: {
        this.form = this.fb.group({
          img: [this.shop.img, [Validators.required]],
          address: [this.shop.address, [Validators.required]],
          openTime: [this.shop.openTime, [Validators.required]],
          closeTime: [this.shop.closeTime, [Validators.required]]
        });
        this.creationMode ? this.title = 'Создание магазина' : this.title = 'Редактирование магазина';
        this.creationMode ? this.recordId = null : this.recordId = this.shop.id;
        break;
      }
      case !!this.product: {
        this.form = this.fb.group({
          img: [this.product.img, [Validators.required]],
          title: [this.product.title, [Validators.required]],
          description: [this.product.description, [Validators.required]],
          type: [this.product.type, [Validators.required]],
          weight: [this.product.weight, [Validators.required]],
          cost: [this.product.cost, [Validators.required]]
        });
        this.creationMode ? this.title = 'Создание товара' : this.title = 'Редактирование товара';
        this.creationMode ? this.recordId = null : this.recordId = this.product.id;
        break;
      }
    }
  }

  manipulate() {
    this.creationMode ? this.creationResultEvent.emit(this.form.value) : this.editionResultEvent.emit({ ...this.form.value, id: this.recordId })
  }

  cancel() {
    this.form.reset();
    this.cancelEvent.emit(true);
  }
}
