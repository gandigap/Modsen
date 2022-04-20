import { CoordinatesType, LocationActions, LocationActionTypes } from 'types';

export const fetchLocation = (): LocationActions => ({
  type: LocationActionTypes.FETCH_LOCATION,
});

export const fetchLocationSuccess = (location: string): LocationActions => ({
  type: LocationActionTypes.FETCH_LOCATION_SUCCESS,
  payload: location,
});

export const fetchLocationError = (errorMessage: string): LocationActions => ({
  type: LocationActionTypes.FETCH_LOCATION_ERROR,
  payload: errorMessage,
});

export const updateLocationName = (cityName: string): LocationActions => ({
  type: LocationActionTypes.UPDATE_LOCATION,
  payload: cityName,
});
export const updateCountyCode = (countryCode: string): LocationActions => ({
  type: LocationActionTypes.UPDATE_COUNTRY_CODE,
  payload: countryCode,
});

export const updateCoordinates = (
  coordinates: CoordinatesType,
): LocationActions => ({
  type: LocationActionTypes.UPDATE_COORDINATES,
  payload: coordinates,
});
