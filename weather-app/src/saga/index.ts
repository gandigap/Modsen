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
  fetchLocationErrorActionCreator,
  fetchLocationSuccessActionCreator,
  fetchWeatherActionCreator,
  fetchWeatherErrorActionCreator,
  fetchWeatherSuccessActionCreator,
  updateCoordinatesActionCreator,
  updateCountyCodeActionCreator,
} from 'actions';
import { errors } from 'constant';
import { RootState } from 'reducers';
import { getDataFromOpenWeatherApi, getUrlApi } from 'utils';
import { apiNames } from 'constant/api';
import { localeStorageItems } from 'constant/localeStorageItems';

function* getLocationCoordinates() {
  try {
    const { location }: LocationStateType = yield select(
      (state) => state.locationState,
    );
    const url = getUrlApi({ type: apiNames.openWeatherGeocode, location });
    const { data }: OpenWeatherFetchGeocodeType = yield call(axios.get, url);
    const { country, lat, lon } = data[0];

    localStorage.setItem(
      localeStorageItems.countryCode,
      JSON.stringify(country),
    );

    yield put(updateCountyCodeActionCreator(country));
    yield put(updateCoordinatesActionCreator({ lat, lon }));
  } catch (err) {
    yield put(fetchLocationErrorActionCreator(errors.geocodeApiError));
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
    yield put(fetchWeatherSuccessActionCreator(info));
  } catch (err) {
    yield put(fetchWeatherErrorActionCreator(errors.weatherApiError));
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
    yield put(fetchLocationSuccessActionCreator(location));
    yield put(fetchWeatherActionCreator());
  } catch (error) {
    yield put(fetchLocationErrorActionCreator(errors.locationIQApiError));
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
