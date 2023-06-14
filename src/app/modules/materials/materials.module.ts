import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialListContainer } from './containers/material-list.container/material-list.container';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    MaterialListContainer
  ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class MaterialsModule { }
