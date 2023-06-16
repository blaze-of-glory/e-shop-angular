import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListContainer } from './containers/employee-list/employee-list.container';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { EmployeesRoutingModule } from "./employees-routing.module";

@NgModule({
  declarations: [
    EmployeeListContainer
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    RouterLink,
    SharedModule
  ]
})
export class EmployeesModule { }
