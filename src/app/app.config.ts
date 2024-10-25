import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './state/counter/counter.reducer';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ProductReducer } from './state/product/product.reducer';
import { provideEffects } from '@ngrx/effects';
import { ProductEffect } from './state/product/product.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(),
    provideHttpClient(withFetch()),
    provideState({ name: 'counter', reducer: counterReducer }),
    provideState({ name: 'product', reducer: ProductReducer }),
    provideEffects(ProductEffect),
  ],
};
