import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Material } from '../classes/material';

@Injectable({
  providedIn: 'root'
})
export class MaterialsState {
  private _loading$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _materials$: BehaviorSubject<Material[]> = new BehaviorSubject<Material[]>(null);
  private _currentMaterial$: BehaviorSubject<Material> = new BehaviorSubject<Material>(null);
  private _currentProviderId$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  isLoading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  setLoading(isUpdating: boolean) {
    this._loading$.next(isUpdating);
  }

  getMaterials$(): Observable<Material[]> {
    return this._materials$.asObservable();
  }

  setMaterials(materials: Material[]) {
    this._materials$.next(materials);
  }

  getCurrentMaterial$(): Observable<Material> {
    return this._currentMaterial$.asObservable();
  }

  setCurrentMaterial(material: Material) {
    this._currentMaterial$.next(material);
  }

  getCurrentProviderId(): string {
    return this._currentProviderId$.value;
  }

  setCurrentProviderId(id: string) {
    this._currentProviderId$.next(id);
  }
}
