/* eslint-disable object-curly-newline */
import { all, takeEvery, select, put, call } from 'redux-saga/effects';

import {
  CoordinatesType,
  LocationActionTypes,
  LocationStateType,
  NavigatorFetchDataType,
  TotalWeatherDataType,
  OpenWeatherFetchGeocodeType,
  WeatherActionTypes,
} from 'types';
import axios from 'axios';
import {
  fetchLocationError,
  fetchLocationSuccess,
  fetchWeather,
  fetchWeatherError,
  fetchWeatherSuccess,
  updateCoordinates,
  updateCountyCode,
} from 'actions';
import { errors, apiNames } from 'constant';
import { RootState } from 'reducers';
import { getDataFromOpenWeatherApi, getUrlApi } from 'utils';

import { localeStorageItems } from 'constant/localeStorageItems';

function* getLocationCoordinates() {
  try {
    const { location }: LocationStateType = yield select(
      (state) => state.locationState,
    );
    localStorage.setItem(localeStorageItems.location, JSON.stringify(location));
    const url = getUrlApi({ type: apiNames.openWeatherGeocode, location });
    const {
      data: [{ lat, country, lon }],
    }: OpenWeatherFetchGeocodeType = yield call(axios.get, url);

    localStorage.setItem(
      localeStorageItems.countryCode,
      JSON.stringify(country),
    );
    yield put(updateCountyCode(country));
    yield put(updateCoordinates({ lat, lon }));
  } catch (err) {
    yield put(fetchLocationError(errors.geocodeApiError));
  }
}

function* getWeather() {
  try {
    yield getLocationCoordinates();
    const {
      locationState: {
        location,
        coordinates: { lat, lon },
      },
      weatherState: { nameAPI },
    }: RootState = yield select((state: RootState) => state);

    const url =
      nameAPI === apiNames.openWeather
        ? getUrlApi({ type: nameAPI, lat, lon })
        : getUrlApi({ type: nameAPI, location });

    const { data }: TotalWeatherDataType = yield call(axios.get, url);
    const info = getDataFromOpenWeatherApi(nameAPI, data);
    localStorage.setItem(localeStorageItems.weatherData, JSON.stringify(info));
    localStorage.setItem(
      localeStorageItems.coordinates,
      JSON.stringify({ lat, lon }),
    );
    yield put(fetchWeatherSuccess(info));
  } catch (err) {
    yield put(fetchWeatherError(errors.weatherApiError));
  }
}

function* getCityName() {
  try {
    const { lat, lon }: CoordinatesType = yield select(
      (state: RootState) => state.locationState.coordinates,
    );
    const urlApiLocation = `https://us1.locationiq.com/v1/reverse.php?key=pk.6ac9639b7b2a2a0a688dbff51d3854c4&lat=${lat}&lon=${lon}&format=json`;
    const { data }: NavigatorFetchDataType = yield call(
      axios.get,
      urlApiLocation,
    );
    const location = data.address.city;
    localStorage.setItem(localeStorageItems.location, JSON.stringify(location));
    yield put(fetchLocationSuccess(location));
    yield put(fetchWeather());
  } catch (error) {
    yield put(fetchLocationError(errors.locationIQApiError));
  }
}

export function* locationWatcher() {
  yield takeEvery(LocationActionTypes.FETCH_LOCATION, getCityName);
}

export function* weatherWatcher() {
  yield takeEvery(WeatherActionTypes.FETCH_WEATHER, getWeather);
}

export default function* rootSaga() {
  yield all([locationWatcher(), weatherWatcher()]);
}
