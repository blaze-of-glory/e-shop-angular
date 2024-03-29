import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./components/header/header.component";
import { RouterLink } from "@angular/router";
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { CardDetailsContainer } from './containers/card-details/card-details.container';
import { ManipulatorComponent } from './components/manipulator/manipulator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SubscriptionsService } from './services/subscriptions.service';



@NgModule({
  providers: [SubscriptionsService],
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    CardDetailsComponent,
    CardDetailsContainer,
    ManipulatorComponent
  ],
  exports: [
        HeaderComponent,
        FooterComponent,
        CardComponent,
        ManipulatorComponent
  ],
  imports: [
        CommonModule,
        RouterLink,
        RouterLink,
        ReactiveFormsModule
  ]
})
export class SharedModule { }
