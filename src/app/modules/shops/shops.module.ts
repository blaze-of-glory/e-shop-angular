import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopListContainer } from './containers/shop-list/shop-list.container';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    ShopListContainer
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ShopsModule { }
