import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ShopsApi } from '../api/shops.api';
import { createShop, deleteShop, editShop, getShops, setShops } from './shops.actions';
import { concatMap, map, mergeMap } from 'rxjs';
import { Shop } from '../classes/shop';

@Injectable()
export class ShopsEffects {
  setShops$ = createEffect(
    () => this.actions$.pipe(
      ofType(getShops),
      mergeMap(() => this.api.getAllShops().pipe(map(shops => setShops({shops})
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
          map(() => getShops())
        )
      )
    )
  );

  editShop$ = createEffect(
    () => this.actions$.pipe(
      ofType(editShop),
      concatMap((payload: { currentShop: Shop }) => this.api.editShop(payload.currentShop.id, payload.currentShop)
        .pipe(
          map(() => getShops())
        )
      )
    )
  );

  deleteShop$ = createEffect(
    () => this.actions$.pipe(
      ofType(deleteShop),
      concatMap((payload: { currentShop: Shop }) => this.api.deleteShop(payload.currentShop.id)
        .pipe(
          map(() => getShops()),
        )
      )
    )
  );



  constructor(private actions$:Actions, private api: ShopsApi) {  }
}
