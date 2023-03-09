import { Component, Input } from '@angular/core';
import { AboutUs } from "../../interfaces/about-us";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  @Input() aboutUs: AboutUs = null;
}
