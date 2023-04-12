import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTER_NAMES } from "./shared/constants/router-names";
import { HomeComponent } from "./modules/home/containers/home/home.component";
import { EmployeeListContainer } from './modules/employees/containers/employee-list/employee-list.container';
import { CardDetailsResolver } from './shared/resolvers/card-details.resolver';
import { CardDetailsContainer } from './shared/containers/card-details/card-details.container';
import { ShopListContainer } from './modules/shops/containers/shop-list/shop-list.container';
import { ProductListContainer } from './modules/products/containers/product-list.container/product-list.container';

const routes: Routes = [
  {
    path: ROUTER_NAMES.HOME,
    component: HomeComponent
  },
  {
    path: ROUTER_NAMES.PRODUCTS,
    component: ProductListContainer,
    pathMatch: "full",
  },
  {
    path: ROUTER_NAMES.PRODUCT,
    component: CardDetailsContainer,
    pathMatch: "full",
    resolve: [CardDetailsResolver]
  },
  {
    path: ROUTER_NAMES.EMPLOYEES,
    component: EmployeeListContainer,
    pathMatch: "full",
  },
  {
    path: ROUTER_NAMES.EMPLOYEE,
    component: CardDetailsContainer,
    pathMatch: "full",
    resolve: [CardDetailsResolver]
  },
  {
    path: ROUTER_NAMES.SHOPS,
    component: ShopListContainer,
    pathMatch: "full",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
