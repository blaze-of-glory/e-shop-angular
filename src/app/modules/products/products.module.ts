import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListContainer } from './containers/product-list.container/product-list.container';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    ProductListContainer
  ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class ProductsModule { }
