import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { AboutUs } from "../shared/interfaces/about-us";
import { Employee } from "../shared/interfaces/employee";
import { Shop } from "../shared/interfaces/shop";
import { Provider } from "../shared/interfaces/provider";
import { Material } from "../shared/interfaces/material";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly apiEndpoint = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  public getAboutUs(): Observable<AboutUs> {
    return this.http.get<AboutUs>(this.apiEndpoint + '/about-us');
  }

  public getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiEndpoint + '/employees');
  }

  public getAllShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>(this.apiEndpoint + '/shops');
  }

  public getAllProviders(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.apiEndpoint + '/providers');
  }

  public getAvailableMaterials(providerId: string): Observable<Material[]> {
    return this.http.get<Material[]>(this.apiEndpoint + `/materials?provider=${providerId}`);
  }

}
