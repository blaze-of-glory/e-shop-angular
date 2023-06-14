import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeFacade } from '../../home.facade';
import { AboutUs } from '../../interfaces/about-us';
import { SubscriptionsService } from '../../../../shared/services/subscriptions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public aboutUs: AboutUs = null;

  constructor(private facade: HomeFacade, private subscriptionsService: SubscriptionsService) { }

  ngOnInit(): void {
    this.facade.loadAboutUs$();
    this.subscriptionsService.next = this.facade.getAboutUs$().subscribe(aboutUs => this.aboutUs = aboutUs);
  }

  ngOnDestroy(): void {
    this.subscriptionsService.unsubscribeAll();
  }
}
