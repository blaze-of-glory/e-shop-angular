import { Component, OnDestroy, OnInit } from '@angular/core';
import { Material } from '../../classes/material';
import { MaterialsFacade } from '../../materials.facade';
import { ActivatedRoute } from '@angular/router';
import { SubscriptionHelper } from '../../../../shared/helpers/subscription.helper';

@Component({
  selector: 'app-material-list.container',
  templateUrl: './material-list.container.html',
  styleUrls: ['./material-list.container.scss']
})
export class MaterialListContainer implements OnInit, OnDestroy {
  public materials: Material[] = null;
  public material: Material = null;
  private readonly subscriptionHelper: SubscriptionHelper = new SubscriptionHelper();

  constructor(private facade: MaterialsFacade, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setCurrentProviderId();
    this.facade.loadMaterials();
    this.subscriptionHelper.next = this.facade.getMaterials$().subscribe(materials => {
      this.materials = materials;
    });
    this.subscriptionHelper.next = this.facade.getCurrentMaterial$().subscribe(material => {
      this.material = material;
    });
  }

  ngOnDestroy(): void {
    this.subscriptionHelper.unsubscribeAll();
  }

  setCurrentProviderId() {
    this.facade.setCurrentProviderId(this.route.snapshot.params['provider']);
  }

  openMaterial(details: Material) {
    this.facade.openProducts(details.id);
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
