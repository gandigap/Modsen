import { takeEvery } from 'redux-saga/effects';
import { locationWorker, weatherWorker } from 'saga/workers';
import { LocationActionTypes, WeatherActionTypes } from 'types';

export function* locationWatcher() {
  yield takeEvery(LocationActionTypes.FETCH_LOCATION, locationWorker);
}

export function* weatherWatcher() {
  yield takeEvery(WeatherActionTypes.FETCH_WEATHER, weatherWorker);
}
