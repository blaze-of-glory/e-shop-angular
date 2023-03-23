import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ShopsApi } from '../api/shops.api';
import { createShop, deleteShop, editShop, fetchShops, loadShops } from './shops.actions';
import { concatMap, map, mergeMap } from 'rxjs';
import { Shop } from '../classes/shop';

@Injectable()
export class ShopsEffects {
  loadShops$ = createEffect(
    () => this.actions$.pipe(
      ofType(fetchShops),
      mergeMap(() => this.api.getAllShops().pipe(map(shops => loadShops({shops})
          )
        )
      )
    )
  );

  createShop$ = createEffect(
    () => this.actions$.pipe(
      ofType(createShop),
      concatMap((payload: { currentShop: Shop }) => this.api.createShop(payload.currentShop)
        .pipe(
          map(() => fetchShops())
        )
      )
    )
  );

  editShop$ = createEffect(
    () => this.actions$.pipe(
      ofType(editShop),
      concatMap((payload: { currentShop: Shop }) => this.api.editShop(payload.currentShop.id, payload.currentShop)
        .pipe(
          map(() => fetchShops())
        )
      )
    )
  );

  deleteShop$ = createEffect(
    () => this.actions$.pipe(
      ofType(deleteShop),
      concatMap((payload: { currentShop: Shop }) => this.api.deleteShop(payload.currentShop.id)
        .pipe(
          map(() => fetchShops()),
        )
      )
    )
  );



  constructor(private actions$:Actions, private api: ShopsApi) {  }
}
