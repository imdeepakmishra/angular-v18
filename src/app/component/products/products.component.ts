import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../shared/models/product.interface';
import { AppState } from '../../state/app.state';
import { Store } from '@ngrx/store';
import { selectAllProduct } from '../../state/product/product.selector';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import {
  loadProduct,
  loadProductSuccess,
} from '../../state/product/product.action';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products$: Observable<IProduct[]>;

  constructor(private productStore: Store<AppState>) {
    this.productStore.dispatch(loadProduct());
    this.products$ = this.productStore.select(selectAllProduct);
  }
}
