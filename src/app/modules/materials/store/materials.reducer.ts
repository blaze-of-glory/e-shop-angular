import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { materialsInitialState, MaterialsState } from './materials.state';
import { setCurrentMaterial, setMaterials, setRelatedProviderId } from './materials.actions';

export const createMaterialsReducer: ActionReducer<MaterialsState> = createReducer<MaterialsState>(
  materialsInitialState,
  on(setMaterials, (state, action) => ({
    ...state,
    materials: action.materials
  })),
  on(setCurrentMaterial, (state, action) => ({
    ...state,
    currentMaterial: action.currentMaterial
  })),
  on(setRelatedProviderId, (state, action) => ({
    ...state,
    relatedProviderId: action.relatedProviderId
  }))
);

export const materialsReducer = (state: MaterialsState | undefined, action: Action) => createMaterialsReducer(state, action);
