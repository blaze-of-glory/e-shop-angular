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
      mergeMap((payload: { relatedProviderId: string, relatedMaterialId: string }) => this.api.getRelevantProducts(payload.relatedProviderId, payload.relatedMaterialId)
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
      concatMap((payload: { currentProduct: Product, relatedProviderId: string, relatedMaterialId: string }) => this.api.createProduct(payload.currentProduct, payload.relatedProviderId, payload.relatedMaterialId)
        .pipe(
          map(() => getProducts({ relatedProviderId: payload.relatedProviderId, relatedMaterialId: payload.relatedMaterialId }))
        )
      )
    )
  );

  editProduct$ = createEffect(
    () => this.actions$.pipe(
      ofType(editProduct),
      concatMap((payload: { currentProduct: Product, relatedProviderId: string, relatedMaterialId: string }) => this.api.editProduct(payload.currentProduct.id, payload.currentProduct)
        .pipe(
          map(() => getProducts({ relatedProviderId: payload.relatedProviderId, relatedMaterialId: payload.relatedMaterialId }))
        )
      )
    )
  );

  deleteProduct$ = createEffect(
    () => this.actions$.pipe(
      ofType(deleteProduct),
      concatMap((payload: { currentProduct: Product, relatedProviderId: string, relatedMaterialId: string }) => this.api.deleteProduct(payload.currentProduct.id)
        .pipe(
          map(() => getProducts({ relatedProviderId: payload.relatedProviderId, relatedMaterialId: payload.relatedMaterialId }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private api: ProductsApi) { }
}
