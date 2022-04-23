import { takeEvery } from 'redux-saga/effects';
import {
  localeStorageWorker,
  locationWorker,
  weatherWorker,
} from 'saga/workers';
import { LocationActionTypes, WeatherActionTypes } from 'types';
import { LocaleStorageActionTypes } from 'types/localeStorageType';

export function* locationWatcher() {
  yield takeEvery(LocationActionTypes.FETCH_LOCATION, locationWorker);
}

export function* weatherWatcher() {
  yield takeEvery(WeatherActionTypes.FETCH_WEATHER, weatherWorker);
}

export function* localeStorageWatcher() {
  yield takeEvery(
    LocaleStorageActionTypes.UPDATE_LOCALE_STORAGE,
    localeStorageWorker,
  );
}
