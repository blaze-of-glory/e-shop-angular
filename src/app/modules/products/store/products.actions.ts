import { createAction, props } from '@ngrx/store';
import { Product } from '../classes/product';

export const getProducts = createAction('[Products] Get products', props<{relatedProviderId: string, relatedMaterialId: string}>());
export const setProducts = createAction('[Products] Set products', props<{products: Product[]}>());
export const createProduct = createAction('[Products] Create product', props<{currentProduct: Product, relatedProviderId: string, relatedMaterialId: string}>());
export const editProduct = createAction('[Products] Edit product', props<{currentProduct: Product, relatedProviderId: string, relatedMaterialId: string}>());
export const deleteProduct = createAction('[Products] Delete product', props<{currentProduct: Product, relatedProviderId: string, relatedMaterialId: string}>());
export const getProductById= createAction('[Products] Get product by id', props<{currentProductId: string}>());
export const setCurrentProduct = createAction('[Products] Set current product', props<{currentProduct: Product}>());
export const setRelatedProviderId = createAction('[Products] Set related provider id', props<{relatedProviderId: string}>());
export const setRelatedMaterialId = createAction('[Products] Set related material id', props<{relatedMaterialId: string}>());
