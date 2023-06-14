import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Material } from '../classes/material';

@Injectable({
  providedIn: 'root'
})
export class MaterialsApi {
  private readonly apiEndpoint = environment.apiEndpoint;
  constructor(private http: HttpClient) { }

  public getCurrentProviderMaterials(providerId: string): Observable<Material[]> {
    return this.http.get<Material[]>(this.apiEndpoint + `/materials/filter?providerId=${providerId}`);
  }

  public createMaterial(materialDetails: Material, providerId: string): Observable<Material> {
    return this.http.post<Material>(this.apiEndpoint + '/materials', { materialDetails, providerId })
  }

  public editMaterial(id: string, materialDetails: Material): Observable<Material> {
    return this.http.put<Material>(this.apiEndpoint + `/materials/${id}`, materialDetails);
  }

}
