import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./components/header/header.component";
import { RouterLink, RouterLinkWithHref } from "@angular/router";
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { CardDetailsContainer } from './containers/card-details/card-details.container';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    CardDetailsComponent,
    CardDetailsContainer
  ],
    exports: [
        HeaderComponent,
        FooterComponent,
        CardComponent
    ],
    imports: [
        CommonModule,
        RouterLinkWithHref,
        RouterLink
    ]
})
export class SharedModule { }
