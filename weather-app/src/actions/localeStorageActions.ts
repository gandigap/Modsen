export const setLocaleStorageItem = <T extends string>(item: T, value: T) => {
  localStorage.setItem(item, value);
};
