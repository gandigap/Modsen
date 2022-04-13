/* eslint-disable object-curly-newline */
import { all, takeEvery, select, put, call } from 'redux-saga/effects';

import {
  CoordinatesType,
  LocationActionTypes,
  LocationStateType,
  NavigatorFetchDataType,
  OpenWeatherApicDataType,
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
import { errors } from 'constants/';
import { RootState } from 'reducers';
import { getDataFromOpenWeatherApi, getUrlApi } from 'utils';
import { apiNames } from 'constants/api';

function* getLocationCoordinates() {
  try {
    const { location }: LocationStateType = yield select((state) => state.locationState);
    const url = getUrlApi({ type: apiNames.openWeatherGeocode, location });
    const { data }: OpenWeatherFetchGeocodeType = yield call(axios.get, url);
    yield put(updateCountyCodeActionCreator(data[0].country));
    yield put(updateCoordinatesActionCreator({ lat: data[0].lat, lon: data[0].lon }));
  } catch (err) {
    yield put(fetchLocationErrorActionCreator(errors.geocodeApiError));
  }
}

function* getWeather() {
  try {
    yield getLocationCoordinates();
    const { coordinates }: LocationStateType = yield select((state) => state.locationState);
    const { lat, lon } = coordinates;
    const url = getUrlApi({ type: apiNames.openWeatherDaily, lat, lon });
    const { data }: OpenWeatherApicDataType = yield call(axios.get, url);
    const info = getDataFromOpenWeatherApi(data.daily);
    console.log(info);
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
    const { data }: NavigatorFetchDataType = yield call(axios.get, urlApiLocation);
    yield put(fetchLocationSuccessActionCreator(data.address.city));
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
