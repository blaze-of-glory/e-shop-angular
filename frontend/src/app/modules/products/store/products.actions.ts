import { createAction, props } from '@ngrx/store';
import { Product } from '../classes/product';

export const getProducts = createAction('[Products] Get products');
export const setProducts = createAction('[Products] Set products', props<{products: Product[]}>());
export const createProduct = createAction('[Products] Create product', props<{currentProduct: Product}>());
export const editProduct = createAction('[Products] Edit product', props<{currentProduct: Product}>());
export const deleteProduct = createAction('[Products] Delete product', props<{currentProduct: Product}>());
export const getProductById= createAction('[Products] Get product by id', props<{currentProductId: string}>());
export const setCurrentProduct = createAction('[Products] Set current product', props<{currentProduct: Product}>());
