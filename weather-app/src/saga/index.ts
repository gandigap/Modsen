/* eslint-disable object-curly-newline */
import { all, takeEvery, select, put, call } from 'redux-saga/effects';

import {
  CoordinatesType,
  LocationActionTypes,
  LocationStateType,
  NavigatorFetchDataType,
  OpenWeatherFetchGeocodeType,
  WeatherActionTypes,
} from 'types';
import axios from 'axios';
import {
  fetchLocationErrorActionCreator,
  fetchLocationSuccessActionCreator,
  fetchWeatherActionCreator,
} from 'actions';
import { errors } from 'constants/';
import { RootState } from 'reducers';

function* getLocationCoordinates() {
  try {
    const { location }: LocationStateType = yield select((state) => state.locationState);
    const urlApiGeocode = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=b9263267a94c30aaafc8ee41fb19e494`;
    const { data }: OpenWeatherFetchGeocodeType = yield call(axios.get, urlApiGeocode);
    console.log(data, 'hahaha');
  } catch (err) {
    yield put(fetchLocationErrorActionCreator(errors.geocodeApiError));
  }
}

function* getWeather() {
  yield getLocationCoordinates();
  /* try {
    const { lat, lon } = yield getLocationCoordinates();
    const urlApiWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&units=metric&appid=b9263267a94c30aaafc8ee41fb19e494`;
    const { data }: OpenWeatherApicDataType = yield call(axios.get, urlApiWeather);
    yield put(fetchWeatherSuccessActionCreator(data.daily));
    console.log(getDataFromOpenWeatherApi(data.daily), 'getWeather');
  } catch (err) {
    yield put(fetchWeatherErrorActionCreator(errors.weatherApiError));
  } */
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
