import { localeStorageItems } from 'constant';
import { take } from 'redux-saga/effects';

import {
  LocaleStorageActions,
  LocaleStorageActionTypes,
} from 'types/localeStorageType';

export function* localeStorageWorker() {
  const action: LocaleStorageActions = yield take(
    LocaleStorageActionTypes.UPDATE_LOCALE_STORAGE,
  );
  switch (action.payload.item) {
    case localeStorageItems.location:
      yield localStorage.setItem(
        localeStorageItems.location,
        action.payload.data,
      );
      break;
    case localeStorageItems.coordinates:
      yield localStorage.setItem(
        localeStorageItems.coordinates,
        action.payload.data,
      );
      break;
    case localeStorageItems.countryCode:
      yield localStorage.setItem(
        localeStorageItems.countryCode,
        action.payload.data,
      );
      break;
    case localeStorageItems.weatherData:
      yield localStorage.setItem(
        localeStorageItems.weatherData,
        action.payload.data,
      );
      break;
    case localeStorageItems.apiName:
      yield localStorage.setItem(
        localeStorageItems.apiName,
        action.payload.data,
      );
      break;

    default:
      break;
  }
}
