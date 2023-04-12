import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from "./modules/home/home.module";
import { SharedModule } from "./shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { EmployeesModule } from './modules/employees/employees.module';
import { ShopsModule } from './modules/shops/shops.module';
import { ProductsModule } from './modules/products/products.module';
import { reducers } from './store/app.reducer';
import { effects } from './store/app.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    ProductsModule,
    EmployeesModule,
    ShopsModule,
    SharedModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
