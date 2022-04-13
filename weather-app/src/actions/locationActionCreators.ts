import { CoordinatesType, LocationActions, LocationActionTypes } from 'types';

export const fetchLocationActionCreator = (): LocationActions => ({
  type: LocationActionTypes.FETCH_LOCATION,
});

export const fetchLocationSuccessActionCreator = (location: string): LocationActions => ({
  type: LocationActionTypes.FETCH_LOCATION_SUCCESS,
  payload: location,
});

export const fetchLocationErrorActionCreator = (errorMessage: string): LocationActions => ({
  type: LocationActionTypes.FETCH_LOCATION_ERROR,
  payload: errorMessage,
});

export const updateLocationNameActionCreator = (cityName: string): LocationActions => ({
  type: LocationActionTypes.UPDATE_LOCATION,
  payload: cityName,
});
export const updateCountyCodeActionCreator = (countryCode: string): LocationActions => ({
  type: LocationActionTypes.UPDATE_COUNTRY_CODE,
  payload: countryCode,
});

export const updateCoordinatesActionCreator = (coordinates: CoordinatesType): LocationActions => ({
  type: LocationActionTypes.UPDATE_COORDINATES,
  payload: coordinates,
});
