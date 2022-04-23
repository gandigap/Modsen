export enum LocaleStorageActionTypes {
  UPDATE_LOCALE_STORAGE = 'UPDATE_LOCALE_STORAGE',
}

interface LocaleStorageUpdateAction {
  type: LocaleStorageActionTypes.UPDATE_LOCALE_STORAGE;
  payload: { item: string; data: string };
}

export type LocaleStorageActions = LocaleStorageUpdateAction;
