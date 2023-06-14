import { createAction, props } from '@ngrx/store';
import { Material } from '../classes/material';

export const getMaterials = createAction('[Materials] Get materials', props<{relatedProviderId: string}>());
export const setMaterials = createAction('[Materials] Set materials', props<{materials: Material[]}>());
export const createMaterial = createAction('[Materials] Create material', props<{currentMaterial: Material, relatedProviderId: string}>());
export const editMaterial = createAction('[Materials] Edit material', props<{currentMaterial: Material, relatedProviderId: string}>());
export const setCurrentMaterial = createAction('[Materials] Set current material', props<{currentMaterial: Material}>());
export const setRelatedProviderId = createAction('[Materials] Set related provider id', props<{relatedProviderId: string}>());
