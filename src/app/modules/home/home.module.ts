import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
