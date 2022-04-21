/* eslint-disable object-curly-newline */
import axios from 'axios';
import { select, put, call } from 'redux-saga/effects';

import {
  CoordinatesType,
  LocationStateType,
  NavigatorFetchDataType,
  TotalWeatherDataType,
  OpenWeatherFetchGeocodeType,
  CurrentWeatherDataType,
} from 'types';
import {
  fetchLocationError,
  fetchLocationSuccess,
  fetchWeather,
  fetchWeatherError,
  fetchWeatherSuccess,
  updateCoordinates,
  updateCountyCode,
} from 'actions';
import { RootState } from 'reducers';
import { locationStateSelector } from 'selectors';
import { errors, apiNames, localeStorageItems } from 'constant';
import { getDataFromOpenWeatherApi, getUrlApi } from 'utils';

function* getLocationCoordinates() {
  try {
    const { location }: LocationStateType = yield select(locationStateSelector);
    yield localStorage.setItem(
      localeStorageItems.location,
      JSON.stringify(location),
    );

    const url: string = yield getUrlApi({
      type: apiNames.openWeatherGeocode,
      location,
    });

    const {
      data: [{ lat, country, lon }],
    }: OpenWeatherFetchGeocodeType = yield call(axios.get, url);

    yield localStorage.setItem(
      localeStorageItems.countryCode,
      JSON.stringify(country),
    );
    yield put(updateCountyCode(country));
    yield put(updateCoordinates({ lat, lon }));
  } catch (err) {
    yield put(fetchLocationError(errors.geocodeApiError));
  }
}

export function* weatherWorker() {
  try {
    yield getLocationCoordinates();
    const {
      locationState: {
        location,
        coordinates: { lat, lon },
      },
      weatherState: { nameAPI },
    }: RootState = yield select((state: RootState) => state);

    const url: string =
      nameAPI === apiNames.openWeather
        ? yield getUrlApi({ type: nameAPI, lat, lon })
        : yield getUrlApi({ type: nameAPI, location });

    const { data }: TotalWeatherDataType = yield call(axios.get, url);
    const info: CurrentWeatherDataType[] = yield getDataFromOpenWeatherApi(
      nameAPI,
      data,
    );
    yield localStorage.setItem(
      localeStorageItems.weatherData,
      JSON.stringify(info),
    );
    yield localStorage.setItem(
      localeStorageItems.coordinates,
      JSON.stringify({ lat, lon }),
    );
    yield put(fetchWeatherSuccess(info));
  } catch (err) {
    yield put(fetchWeatherError(errors.weatherApiError));
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

    yield localStorage.setItem(
      localeStorageItems.location,
      JSON.stringify(city),
    );
    yield put(fetchLocationSuccess(city));
    yield put(fetchWeather());
  } catch (error) {
    yield put(fetchLocationError(errors.locationIQApiError));
  }
}
