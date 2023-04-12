import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, mergeMap } from 'rxjs';
import { ProductsApi } from '../api/products.api';
import { createProduct, deleteProduct, editProduct, getProductById, getProducts, setCurrentProduct, setProducts } from './products.actions';
import { Product } from '../classes/product';

@Injectable()
export class ProductsEffects {
  getProducts$ = createEffect(
    () => this.actions$.pipe(
      ofType(getProducts),
      mergeMap(() => this.api.getAllProducts()
        .pipe(
          map(products => setProducts({ products }))
        )
      )
    )
  );

  getProductById$ = createEffect(
    () => this.actions$.pipe(
      ofType(getProductById),
      concatMap((payload: { currentProductId: string }) => this.api.getProductById(payload.currentProductId)
        .pipe(
          map(currentProduct => setCurrentProduct({ currentProduct }))
        )
      )
    )
  );

  createProduct$ = createEffect(
    () => this.actions$.pipe(
      ofType(createProduct),
      concatMap((payload: { currentProduct: Product }) => this.api.createProduct(payload.currentProduct)
        .pipe(
          map(() => getProducts())
        )
      )
    )
  );

  editProduct$ = createEffect(
    () => this.actions$.pipe(
      ofType(editProduct),
      concatMap((payload: { currentProduct: Product }) => this.api.editProduct(payload.currentProduct.id, payload.currentProduct)
        .pipe(
          map(() => getProducts())
        )
      )
    )
  );

  deleteProduct$ = createEffect(
    () => this.actions$.pipe(
      ofType(deleteProduct),
      concatMap((payload: { currentProduct: Product }) => this.api.deleteProduct(payload.currentProduct.id)
        .pipe(
          map(() => getProducts())
        )
      )
    )
  );

  constructor(private actions$: Actions, private api: ProductsApi) { }
}
