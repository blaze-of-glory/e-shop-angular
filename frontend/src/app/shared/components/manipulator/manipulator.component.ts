import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../../modules/employees/classes/employee';
import { Shop } from '../../../modules/shops/classes/shop';
import { Provider } from '../../../modules/providers/classes/provider';

@Component({
  selector: 'app-manipulator',
  templateUrl: './manipulator.component.html',
  styleUrls: ['./manipulator.component.scss']
})
export class ManipulatorComponent implements OnInit {
  @Input() employee: Employee = null;
  @Input() shop: Shop = null;
  @Input() provider: Provider = null;
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
      case !!this.provider: {
        this.form = this.fb.group({
          img: [this.provider.img, [Validators.required]],
          title: [this.provider.title, [Validators.required]],
          subtitle: [this.provider.subtitle, [Validators.required]],
          description: [this.provider.description, [Validators.required]],
          foundingDate: [this.provider.foundingDate, [Validators.required]]
        });
        this.creationMode ? this.title = 'Создание поставщика' : this.title = 'Редактирование поставщика';
        this.creationMode ? this.recordId = null : this.recordId = this.provider.id;
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
