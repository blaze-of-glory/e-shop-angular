import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./components/header/header.component";
import { RouterLink, RouterLinkWithHref } from "@angular/router";
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardComponent
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
