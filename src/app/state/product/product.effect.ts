import { inject, Injectable } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from 'rxjs/internal/scheduler/Action';
import * as ProductActions from './product.action';
import { catchError, map, of, switchMap } from 'rxjs';
@Injectable()
export class ProductEffect {
  private api = inject(ProductService);
  action$ = inject(Actions);

  loadProducts = createEffect(() =>
    this.action$.pipe(
      ofType(ProductActions.loadProduct),
      switchMap(() =>
        this.api.getProducts().pipe(
          map((res) => ProductActions.loadProductSuccess({ products: res })),
          catchError((error: { message: string }) =>
            of(
              ProductActions.loadProductFailure({
                errorMsg: 'fail to load products',
              })
            )
          )
        )
      )
    )
  );
}
