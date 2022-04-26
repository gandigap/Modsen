import {
  LocaleStorageActions,
  LocaleStorageActionTypes,
} from 'types/localeStorageType';

export const updateLocaleStorage = (
  item: string,
  data: string,
): LocaleStorageActions => ({
  type: LocaleStorageActionTypes.UPDATE_LOCALE_STORAGE,
  payload: { item, data },
});
