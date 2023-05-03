import { Component, OnDestroy, OnInit } from '@angular/core';
import { Material } from '../../classes/material';
import { SubscriptionsService } from '../../../../shared/services/subscriptions.service';
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

  constructor(private store: Store, private router: Router, private subscriptionsService: SubscriptionsService) { }

  ngOnInit(): void {
    this.subscriptionsService.next = this.store.select(selectRelatedProviderId).subscribe(relatedProviderId => {
        this.store.dispatch(getMaterials({ relatedProviderId }));
      });
    this.subscriptionsService.next = this.store.select(selectAllMaterials).subscribe(materials => {
      this.materials = materials;
    });
    this.subscriptionsService.next = this.store.select(selectCurrentMaterial).subscribe(material => {
      this.material = material;
    });
  }

  ngOnDestroy(): void {
    this.subscriptionsService.unsubscribeAll();
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
