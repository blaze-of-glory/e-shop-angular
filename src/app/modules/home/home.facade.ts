import { Injectable } from '@angular/core';
import { HomeApi } from './api/home.api';
import { HomeState } from './state/home.state';
import { Observable } from 'rxjs';
import { AboutUs } from './interfaces/about-us';

@Injectable({
  providedIn: 'root'
})
export class HomeFacade {

  constructor(private api: HomeApi, private state: HomeState) { }

  isLoading$(): Observable<boolean> {
    return this.state.isLoading$();
  }

  getAboutUs$(): Observable<AboutUs> {
    return this.state.getAboutUs$();
  }

  loadAboutUs$() {
    this.api.getAboutUsInfo().subscribe(aboutUs => this.state.setAboutUs(aboutUs));
  }
}
