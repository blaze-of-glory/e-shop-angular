import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProvidersApi } from '../api/providers.api';
import { createProvider, editProvider, getProviders, setProviders } from './providers.actions';
import { concatMap, map, mergeMap } from 'rxjs';
import { Provider } from '../classes/provider';

@Injectable()
export class ProvidersEffects {
  getProviders$ = createEffect(
    () => this.actions$.pipe(
      ofType(getProviders),
      mergeMap(() => this.api.getAllProviders()
        .pipe(
          map(providers => setProviders({ providers }))
        )
      )
    )
  );

  createProvider$ = createEffect(
    () => this.actions$.pipe(
      ofType(createProvider),
      concatMap((payload: { currentProvider: Provider }) => this.api.createProvider(payload.currentProvider)
        .pipe(
          map(() => getProviders())
        )
      )
    )
  );

  editProvider$ = createEffect(
    () => this.actions$.pipe(
      ofType(editProvider),
      concatMap((payload: { currentProvider: Provider }) => this.api.editProvider( payload.currentProvider.id,payload.currentProvider)
        .pipe(
          map(() => getProviders())
        )
      )
    )
  );

  constructor(private actions$: Actions, private api: ProvidersApi) { }
}
