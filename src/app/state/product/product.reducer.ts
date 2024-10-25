import { createReducer, on } from '@ngrx/store';
import { IProduct } from '../../shared/models/product.interface';
import {
  loadProduct,
  loadProductFailure,
  loadProductSuccess,
} from './product.action';

export interface ProductState {
  products: IProduct[];
  error: string | null;
}

export const initialProductState: ProductState = {
  products: [],
  error: null,
};

export const ProductReducer = createReducer(
  initialProductState,
  on(loadProductSuccess, (state, { products }) => ({
    ...state,
    products,
    error: null,
  })),
  on(loadProductFailure, (state, { errorMsg }) => ({
    ...state,
    error: errorMsg,
  }))
);
