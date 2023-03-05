import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTER_NAMES } from "./shared/constants/router-names";
import { HomeComponent } from "./modules/home/pages/home/home.component";
import { CatalogComponent } from "./modules/catalog/pages/catalog/catalog.component";
import { ItemComponent } from "./modules/catalog/pages/item/item.component";
import { ManipulateComponent } from "./modules/catalog/pages/manipulate/manipulate.component";
import { CatalogResolver } from './core/resolvers/catalog.resolver';
import { EmployeeListContainer } from './modules/employees/containers/employee-list/employee-list.container';
import { CardDetailsResolver } from './core/resolvers/card-details.resolver';
import { CardDetailsContainer } from './shared/containers/card-details/card-details.container';
import { ShopListContainer } from './modules/shops/containers/shop-list/shop-list.container';
import { ProviderListContainer } from './modules/providers/containers/provider-list/provider-list.container';
import { MaterialListContainer } from './modules/materials/containers/material-list.container/material-list.container';

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
    pathMatch: 'full',
  },
  {
    path: ROUTER_NAMES.PRODUCTS,
    component: CatalogComponent,
    pathMatch: "full",
    resolve: {
      products: CatalogResolver,
      title: (): string => 'Список продуктов'
    }
  },
  {
    path: ROUTER_NAMES.PRODUCT,
    component: ItemComponent,
    pathMatch: "full"
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
    resolve: {
      employee: CardDetailsResolver
    }
  },
  {
    path: ROUTER_NAMES.SHOPS,
    component: ShopListContainer,
    pathMatch: "full",
  },
  {
    path: ROUTER_NAMES.ADD,
    component: ManipulateComponent,
    pathMatch: "full"
  },
  {
    path: ROUTER_NAMES.EDIT,
    component: ManipulateComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
