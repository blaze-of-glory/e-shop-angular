import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AboutUs } from '../interfaces/about-us';

@Injectable({
  providedIn: 'root'
})
export class HomeState {
  private _loading$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _aboutUs$: BehaviorSubject<AboutUs> = new BehaviorSubject<AboutUs>(null);

  isLoading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  setLoading(isUpdating: boolean) {
    this._loading$.next(isUpdating);
  }

  getAboutUs$(): Observable<AboutUs> {
    return this._aboutUs$.asObservable();
  }

  setAboutUs(aboutUs: AboutUs) {
    this._aboutUs$.next(aboutUs);
  }
}
