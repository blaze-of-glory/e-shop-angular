import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shop } from '../classes/shop';


@Injectable({
  providedIn: 'root'
})
export class ShopsApi {

  private readonly apiEndpoint = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  public getAllShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>(this.apiEndpoint + '/shops');
  }

  public createShop(shopDetails: Shop): Observable<Shop> {
    return this.http.post<Shop>(this.apiEndpoint + '/shops', shopDetails);
  }

  public editShop(id: string, shopDetails: Shop): Observable<Shop> {
    return this.http.put<Shop>(this.apiEndpoint + `/shops/${id}`, shopDetails);
  }

  public deleteShop(id: string): Observable<string> {
    return this.http.delete<string>(this.apiEndpoint + `/shops/${id}`);
  }
}
