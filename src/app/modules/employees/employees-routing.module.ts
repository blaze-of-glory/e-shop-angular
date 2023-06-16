import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { EmployeeListContainer } from "./containers/employee-list/employee-list.container";

const routes: Routes = [
  {
    path: '',
    component: EmployeeListContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
