import { Component, OnDestroy, OnInit } from '@angular/core';
import { Material } from '../../classes/material';
import { SubscriptionHelper } from '../../../../shared/helpers/subscription.helper';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { selectAllMaterials, selectCurrentMaterial, selectRelatedProviderId } from '../../store/materials.selectors';
import { take } from 'rxjs';
import { createMaterial, editMaterial, getMaterials, setCurrentMaterial } from '../../store/materials.actions';
import { ROUTER_LINKS } from '../../../../shared/constants/router-links';

@Component({
  selector: 'app-material-list.container',
  templateUrl: './material-list.container.html',
  styleUrls: ['./material-list.container.scss']
})
export class MaterialListContainer implements OnInit, OnDestroy {
  public materials: Material[] = null;
  public material: Material = null;
  private readonly subscriptionHelper: SubscriptionHelper = new SubscriptionHelper();

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.subscriptionHelper.next = this.store.select(selectRelatedProviderId).subscribe(relatedProviderId => {
        this.store.dispatch(getMaterials({ relatedProviderId }));
      });
    this.subscriptionHelper.next = this.store.select(selectAllMaterials).subscribe(materials => {
      this.materials = materials;
    });
    this.subscriptionHelper.next = this.store.select(selectCurrentMaterial).subscribe(material => {
      this.material = material;
    });
  }

  ngOnDestroy(): void {
    this.subscriptionHelper.unsubscribeAll();
  }

  openMaterial(details: Material) {
    this.store.select(selectRelatedProviderId)
      .pipe(take(1))
      .subscribe(relatedProviderId => {
        this.router.navigateByUrl(ROUTER_LINKS.PROVIDERS + `/${relatedProviderId}/${details.id}`);
      });
  }

  addMaterial() {
    this.setCurrentMaterial(new Material());
  }

  setCurrentMaterial(currentMaterial: Material) {
    this.store.dispatch(setCurrentMaterial({ currentMaterial }));
  }

  createMaterial(currentMaterial: Material) {
    this.store.select(selectRelatedProviderId)
      .pipe(take(1))
      .subscribe(relatedProviderId => {
        this.store.dispatch(createMaterial({ currentMaterial, relatedProviderId }));
        this.setCurrentMaterial(null);
      });
  }

  editMaterial(currentMaterial: Material) {
    this.store.select(selectRelatedProviderId)
      .pipe(take(1))
      .subscribe(relatedProviderId => {
        this.store.dispatch(editMaterial({ currentMaterial, relatedProviderId }));
        this.setCurrentMaterial(null);
      });
  }

  isCreationMode(): boolean {
    return this.material instanceof Material;
  }

  cancel() {
    this.setCurrentMaterial(null);
  }
}
