import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderListContainer } from './containers/provider-list/provider-list.container';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    ProviderListContainer
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProvidersModule { }
