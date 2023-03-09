import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AboutUs } from '../interfaces/about-us';

@Injectable({
  providedIn: 'root'
})
export class HomeApi {
  private readonly apiEndpoint = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  public getAboutUsInfo(): Observable<AboutUs> {
    return this.http.get<AboutUs>(this.apiEndpoint + '/about-us');
  }
}
