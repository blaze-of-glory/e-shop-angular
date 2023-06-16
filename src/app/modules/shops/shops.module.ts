import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopListContainer } from './containers/shop-list/shop-list.container';
import { SharedModule } from '../../shared/shared.module';
import { ShopsRoutingModule } from "./shops-routing.module";



@NgModule({
  declarations: [
    ShopListContainer
  ],
  imports: [
    CommonModule,
    ShopsRoutingModule,
    SharedModule
  ]
})
export class ShopsModule { }
