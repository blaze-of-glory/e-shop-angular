import { Component, OnDestroy, OnInit } from '@angular/core';
import { Material } from '../../classes/material';
import { Subscription } from 'rxjs';
import { MaterialsFacade } from '../../materials.facade';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-material-list.container',
  templateUrl: './material-list.container.html',
  styleUrls: ['./material-list.container.scss']
})
export class MaterialListContainer implements OnInit, OnDestroy {
  public materials: Material[] = null;
  public material: Material = null;
  private materialsSubscription: Subscription = null;
  private materialSubscription: Subscription = null;

  constructor(private facade: MaterialsFacade, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setCurrentProviderId();
    this.facade.loadMaterials();
    this.materialsSubscription = this.facade.getMaterials$().subscribe(materials => {
      this.materials = materials;
    });
    this.materialSubscription = this.facade.getCurrentMaterial$().subscribe(material => {
      this.material = material;
    });
  }

  ngOnDestroy(): void {
    this.materialsSubscription.unsubscribe();
    this.materialSubscription.unsubscribe();
  }

  setCurrentProviderId() {
    this.facade.setCurrentProviderId(this.route.snapshot.params['provider']);
  }

  openProduct(id: string) {
    this.facade.openProducts(id);
  }

  addMaterial() {
    this.facade.addMaterial();
  }

  setCurrentMaterial(material: Material) {
    this.facade.setCurrentMaterial(material);
  }

  createMaterial(material: Material) {
    this.facade.createMaterial(material);
  }

  editMaterial(material: Material) {
    this.facade.editMaterial(material);
  }

  isCreationMode(): boolean {
    return this.material instanceof Material;
  }

  cancel() {
    this.facade.setCurrentMaterial(null);
  }
}
