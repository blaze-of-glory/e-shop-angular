import { NgModule } from '@angular/core';
import { ShopListContainer } from './containers/shop-list/shop-list.container';
import { Route, RouterModule } from "@angular/router";

const routes: Route[] = [
  {
    path: '',
    component: ShopListContainer
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsRoutingModule { }
