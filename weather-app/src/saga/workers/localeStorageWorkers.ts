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
  let nameItem: string | null = null;
  switch (action.payload.item) {
    case localeStorageItems.location:
      nameItem = localeStorageItems.location;
      break;
    case localeStorageItems.coordinates:
      nameItem = localeStorageItems.coordinates;
      break;
    case localeStorageItems.countryCode:
      nameItem = localeStorageItems.countryCode;
      break;
    case localeStorageItems.weatherData:
      nameItem = localeStorageItems.weatherData;
      break;
    default:
      nameItem = localeStorageItems.apiName;
      break;
  }

  yield localStorage.setItem(nameItem, action.payload.data);
}
