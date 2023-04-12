import { Component } from '@angular/core';
import { AboutUs } from '../../interfaces/about-us';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public aboutUs: AboutUs = {
    id: '1',
    img: 'https://kirmash.by/images/sekcii/juv2/juv2_5.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, voluptates?'
  };
}
