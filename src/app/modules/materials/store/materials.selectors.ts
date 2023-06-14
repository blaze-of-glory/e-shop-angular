import { createSelector } from '@ngrx/store';
import { MaterialsState, selectMaterialsState } from './materials.state';

export const selectAllMaterials = createSelector(
  selectMaterialsState,
  (state: MaterialsState) => state.materials
);

export const selectCurrentMaterial = createSelector(
  selectMaterialsState,
  (state: MaterialsState) => state.currentMaterial
);

export const selectRelatedProviderId = createSelector(
  selectMaterialsState,
  (state: MaterialsState) => state.relatedProviderId
);
