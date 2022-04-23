/* eslint-disable object-curly-newline */
import axios from 'axios';
import { select, put, call } from 'redux-saga/effects';

import {
  CoordinatesType,
  LocationStateType,
  NavigatorFetchDataType,
  OpenWeatherFetchGeocodeType,
} from 'types';
import {
  fetchLocationError,
  fetchLocationSuccess,
  fetchWeather,
  updateCoordinates,
  updateCountyCode,
  updateLocaleStorage,
} from 'actions';
import { RootState } from 'reducers';
import { locationStateSelector } from 'selectors';
import { errors, apiNames, localeStorageItems } from 'constant';
import { getUrlApi } from 'utils';

export function* getLocationCoordinates() {
  try {
    const { location }: LocationStateType = yield select(locationStateSelector);

    const url: string = yield getUrlApi({
      type: apiNames.openWeatherGeocode,
      location,
    });

    const {
      data: [{ lat, country, lon }],
    }: OpenWeatherFetchGeocodeType = yield call(axios.get, url);

    yield put(updateCountyCode(country));
    yield put(updateLocaleStorage(localeStorageItems.countryCode, country));
    yield put(updateCoordinates({ lat, lon }));
    yield put(
      updateLocaleStorage(
        localeStorageItems.coordinates,
        JSON.stringify({ lat, lon }),
      ),
    );
  } catch (err) {
    yield put(fetchLocationError(errors.geocodeApiError));
  }
}

export function* locationWorker() {
  try {
    const { lat, lon }: CoordinatesType = yield select(
      (state: RootState) => state.locationState.coordinates,
    );

    const urlApiLocation: string = yield getUrlApi({
      type: apiNames.locationiq,
      lat,
      lon,
    });

    const {
      data: {
        address: { city },
      },
    }: NavigatorFetchDataType = yield call(axios.get, urlApiLocation);
    yield put(
      updateLocaleStorage(
        localeStorageItems.coordinates,
        { lat, lon }.toString(),
      ),
    );
    yield put(fetchLocationSuccess(city));
    yield put(updateLocaleStorage(localeStorageItems.location, city));
    yield put(fetchWeather());
  } catch (error) {
    yield put(fetchLocationError(errors.locationIQApiError));
  }
}
