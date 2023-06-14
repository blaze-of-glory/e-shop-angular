import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { providersInitialState, ProvidersState } from './providers.state';
import { setCurrentProvider, setProviders } from './providers.actions';

export const createProvidersReducer: ActionReducer<ProvidersState> = createReducer<ProvidersState>(
  providersInitialState,
  on(setProviders, (state, action) => ({
    ...state,
    providers: action.providers
  })),
  on(setCurrentProvider, (state, action) => ({
    ...state,
    currentProvider: action.currentProvider
  }))
);

export const providersReducer = (state: ProvidersState | undefined, action: Action) => createProvidersReducer(state, action);
