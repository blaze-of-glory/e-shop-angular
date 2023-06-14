import { createAction, props } from '@ngrx/store';
import { Provider } from '../classes/provider';

export const getProviders = createAction('[Providers] Get providers');
export const setProviders = createAction('[Providers] Set providers', props<{providers: Provider[]}>());
export const createProvider = createAction('[Providers] Create provider', props<{currentProvider: Provider}>());
export const editProvider = createAction('[Providers] Edit provider', props<{currentProvider: Provider}>());
export const setCurrentProvider = createAction('[Providers] Set current provider', props<{currentProvider: Provider}>());
