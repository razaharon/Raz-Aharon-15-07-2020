import { localStorageSync } from 'ngrx-store-localstorage';
import { ActionReducer } from '@ngrx/store';
import { Weather } from '../interfaces/weather';

export function localStorageSyncReducer(reducer: ActionReducer<Weather[]>): ActionReducer<any> {
  return localStorageSync({ keys: ['favorites'], rehydrate: true })(reducer);
}
