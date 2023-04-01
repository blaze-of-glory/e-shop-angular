import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Material } from './classes/material';
import { ROUTER_LINKS } from '../../shared/constants/router-links';
import { selectAllMaterials, selectCurrentMaterial, selectRelatedProviderId } from './store/materials.selectors';
import { createMaterial, editMaterial, getMaterials, setCurrentMaterial } from './store/materials.actions';

@Injectable({
  providedIn: 'root'
})
export class MaterialsFacade {

  constructor(private store: Store, private router: Router) { }

  getMaterials$(): Observable<Material[]> {
    return this.store.select(selectAllMaterials);
  }

  setMaterials() {
    this.store.select(selectRelatedProviderId)
      .pipe(take(1))
      .subscribe(relatedProviderId => {
        this.store.dispatch(getMaterials({ relatedProviderId }));
      });
  }

  getCurrentMaterial$(): Observable<Material> {
    return this.store.select(selectCurrentMaterial);
  }

  setCurrentMaterial(currentMaterial: Material) {
    this.store.dispatch(setCurrentMaterial({ currentMaterial }))
  }

  openProducts(id: string) {
    this.store.select(selectRelatedProviderId)
      .pipe(take(1))
      .subscribe(relatedProviderId => {
        this.router.navigateByUrl(ROUTER_LINKS.PROVIDERS + `/${relatedProviderId}/${id}`);
      });
  }

  addMaterial() {
    this.setCurrentMaterial(new Material());
  }

  createMaterial(currentMaterial: Material) {
    this.store.select(selectRelatedProviderId)
      .pipe(take(1))
      .subscribe(relatedProviderId => {
        this.store.dispatch(createMaterial({ currentMaterial, relatedProviderId }))
      });
    this.setCurrentMaterial(null);
  }

  editMaterial(currentMaterial: Material) {
    this.store.select(selectRelatedProviderId)
      .pipe(take(1))
      .subscribe(relatedProviderId => {
        this.store.dispatch(editMaterial({ currentMaterial, relatedProviderId }));
        this.setCurrentMaterial(null);
      });
  }
}
