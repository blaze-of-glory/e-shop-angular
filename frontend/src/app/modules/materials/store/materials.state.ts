import { Material } from '../classes/material';
import { createFeatureSelector } from '@ngrx/store';

export interface MaterialsState {
  materials: Material[];
  currentMaterial: Material;
  relatedProviderId: string;
}

export const materialsInitialState: MaterialsState = {
  materials: [],
  currentMaterial: null,
  relatedProviderId: null
}

export const selectMaterialsState = createFeatureSelector<MaterialsState>('materials');
