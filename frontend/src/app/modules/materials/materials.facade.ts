import { Injectable } from '@angular/core';
import { MaterialsApi } from './api/materials.api';
import { MaterialsState } from './state/materials.state';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Material } from './classes/material';
import { ROUTER_LINKS } from '../../shared/constants/router-links';

@Injectable({
  providedIn: 'root'
})
export class MaterialsFacade {

  constructor(private api: MaterialsApi, private state: MaterialsState, private router: Router) { }

  isLoading$(): Observable<boolean> {
    return this.state.isLoading$();
  }

  getMaterials$(): Observable<Material[]> {
    return this.state.getMaterials$();
  }

  loadMaterials() {
    this.api.getCurrentProviderMaterials(this.state.getCurrentProviderId())
      .subscribe((materials: Material[]) => this.state.setMaterials(materials));
  }

  getCurrentMaterial$(): Observable<Material> {
    return this.state.getCurrentMaterial$();
  }

  setCurrentMaterial(material: Material) {
    this.state.setCurrentMaterial(material);
  }

  setCurrentProviderId(id: string) {
    this.state.setCurrentProviderId(id);
  }

  openProducts(id: string) {
    this.router.navigateByUrl(ROUTER_LINKS.PROVIDERS + `/${this.state.getCurrentProviderId()}/${id}`);
  }

  addMaterial() {
    this.setCurrentMaterial(new Material());
  }

  createMaterial(material: Material) {
    this.state.setLoading(true);
    this.api.createMaterial(material, this.state.getCurrentProviderId()).subscribe(
      () => {
        this.loadMaterials();
        this.setCurrentMaterial(null);
      },
      error => console.log(error),
      () => this.state.setLoading(false)
    );
  }

  editMaterial(material: Material) {
    this.state.setLoading(true);
    this.api.editMaterial(material.id, material).subscribe(
      () => {
        this.loadMaterials();
        this.setCurrentMaterial(null);
      },
      error => console.log(error),
      () => this.state.setLoading(false)
    );
  }
}
