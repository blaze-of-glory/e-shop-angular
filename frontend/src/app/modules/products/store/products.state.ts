import { Product } from '../classes/product';
import { createFeatureSelector } from '@ngrx/store';

export interface ProductsState {
  products: Product[];
  currentProduct: Product;
  relatedProviderId: string;
  relatedMaterialId: string;
}

export const productsInitialState: ProductsState = {
  products: [],
  currentProduct: null,
  relatedProviderId: null,
  relatedMaterialId: null
}

export const selectProductsState = createFeatureSelector<ProductsState>('products');
