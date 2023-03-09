import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeFacade } from '../../home.facade';
import { AboutUs } from '../../interfaces/about-us';
import { SubscriptionHelper } from '../../../../shared/helpers/subscription.helper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public aboutUs: AboutUs = null;
  private readonly subscriptionHelper: SubscriptionHelper = new SubscriptionHelper();
  constructor(private facade: HomeFacade) { }

  ngOnInit(): void {
    this.facade.loadAboutUs$();
    this.subscriptionHelper.next = this.facade.getAboutUs$().subscribe(aboutUs => this.aboutUs = aboutUs);
  }

  ngOnDestroy(): void {
    this.subscriptionHelper.unsubscribeAll();
  }
}
