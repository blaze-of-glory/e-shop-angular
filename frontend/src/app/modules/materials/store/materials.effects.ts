import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createMaterial, editMaterial, getMaterials, setMaterials } from './materials.actions';
import { concatMap, map, mergeMap } from 'rxjs';
import { Material } from '../classes/material';
import { MaterialsApi } from '../api/materials.api';

@Injectable()
export class MaterialsEffects {
  getMaterials$ = createEffect(
    () => this.actions$.pipe(
      ofType(getMaterials),
      mergeMap((payload: { relatedProviderId: string }) => this.api.getCurrentProviderMaterials(payload.relatedProviderId)
        .pipe(
          map(materials => setMaterials({ materials }))
        )
      )
    )
  );

  createMaterial$ = createEffect(
    () => this.actions$.pipe(
      ofType(createMaterial),
      concatMap((payload: { currentMaterial: Material, relatedProviderId: string }) => this.api.createMaterial(payload.currentMaterial, payload.relatedProviderId)
        .pipe(
          map(() => getMaterials({ relatedProviderId: payload.relatedProviderId }))
        )
      )
    )
  );

  editMaterial$ = createEffect(
    () => this.actions$.pipe(
      ofType(editMaterial),
      concatMap((payload: { currentMaterial: Material, relatedProviderId: string }) => this.api.editMaterial( payload.currentMaterial.id,payload.currentMaterial)
        .pipe(
          map(() => getMaterials({ relatedProviderId: payload.relatedProviderId }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private api: MaterialsApi) { }
}
