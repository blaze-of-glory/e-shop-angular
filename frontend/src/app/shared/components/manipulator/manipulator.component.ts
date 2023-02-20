import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../../modules/employees/classes/employee';

@Component({
  selector: 'app-manipulator',
  templateUrl: './manipulator.component.html',
  styleUrls: ['./manipulator.component.scss']
})
export class ManipulatorComponent implements OnInit {
  @Input() employee: Employee = null;
  @Input() creationMode: boolean;

  @Output() cancelEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() creationResultEvent: EventEmitter<Employee> = new EventEmitter<Employee>();
  @Output() editionResultEvent: EventEmitter<Employee> = new EventEmitter<Employee>();

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
