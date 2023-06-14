import { createAction, props } from '@ngrx/store';
import { Shop } from '../classes/shop';

export const getShops = createAction('[Shops] Get shops');
export const setShops = createAction('[Shops] Set shops', props<{shops: Shop[]}>());
export const createShop = createAction('[Shops] Create shop', props<{currentShop: Shop}>());
export const editShop = createAction('[Shops] Edit shop', props<{currentShop: Shop}>());
export const deleteShop = createAction('[Shops] Delete shop', props<{currentShop: Shop}>());
export const setCurrentShop = createAction('[Shops] Set current shop', props<{currentShop: Shop}>());
