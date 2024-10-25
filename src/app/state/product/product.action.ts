import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../shared/models/product.interface';

export const loadProduct = createAction(
  '[Product Component] Load all the products'
);

export const loadProductSuccess = createAction(
  '[Product Component] Load product success',
  props<{ products: IProduct[] }>()
);
export const loadProductFailure = createAction(
  '[Product Component] Load product failure',
  props<{ errorMsg: string }>()
);
