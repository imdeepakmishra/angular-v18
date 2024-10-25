import { CounterState } from './counter/counter.reducer';
import { ProductState } from './product/product.reducer';

export interface AppState {
  counter: CounterState;
  product: ProductState;
}
