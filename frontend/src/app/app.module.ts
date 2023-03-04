import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from "./modules/home/home.module";
import { SharedModule } from "./shared/shared.module";
import { CatalogModule } from "./modules/catalog/catalog.module";
import { HttpClientModule } from "@angular/common/http";
import { EmployeesModule } from './modules/employees/employees.module';
import { ShopsModule } from './modules/shops/shops.module';
import { ProvidersModule } from './modules/providers/providers.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    CatalogModule,
    ProvidersModule,
    EmployeesModule,
    ShopsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
