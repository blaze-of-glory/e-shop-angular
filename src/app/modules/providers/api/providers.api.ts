import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provider } from '../classes/provider';

@Injectable({
  providedIn: 'root'
})
export class ProvidersApi {
  private readonly apiEndpoint = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  public getAllProviders(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.apiEndpoint + '/providers');
  }

  public createProvider(providerDetails: any): Observable<Provider> {
    return this.http.post<Provider>(this.apiEndpoint + '/providers', providerDetails);
  }

  public editProvider(id: string, providerDetails: any): Observable<Provider> {
    return this.http.put<Provider>(this.apiEndpoint + `/providers/${id}`, providerDetails);
  }
}
