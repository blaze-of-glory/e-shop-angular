import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTER_NAMES } from "./shared/constants/router-names";
import { HomeComponent } from "./modules/home/containers/home/home.component";
import { CardDetailsResolver } from './shared/resolvers/card-details.resolver';
import { CardDetailsContainer } from './shared/containers/card-details/card-details.container';
import { ProviderListContainer } from './modules/providers/containers/provider-list/provider-list.container';
import { MaterialListContainer } from './modules/materials/containers/material-list.container/material-list.container';
import { ProductListContainer } from './modules/products/containers/product-list.container/product-list.container';
import { MaterialsResolver } from './modules/materials/materials.resolver';
import { ProductsResolver } from './modules/products/products.resolver';

const routes: Routes = [
  {
    path: ROUTER_NAMES.HOME,
    component: HomeComponent
  },
  {
    path: ROUTER_NAMES.PROVIDERS,
    component: ProviderListContainer,
    pathMatch: 'full',
  },
  {
    path: ROUTER_NAMES.MATERIALS,
    component: MaterialListContainer,
    resolve: [MaterialsResolver],
    pathMatch: 'full',
  },
  {
    path: ROUTER_NAMES.PRODUCTS,
    component: ProductListContainer,
    resolve: [ProductsResolver],
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
    loadChildren: () => import('./modules/employees/employees.module').then(m => m.EmployeesModule),
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
    loadChildren: () => import('./modules/shops/shops.module').then(m => m.ShopsModule),
    pathMatch: "full",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
