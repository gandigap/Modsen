import { CoordinatesType, LocationActions, LocationActionTypes } from 'types';

export const fetchLocationActionCreator = (): LocationActions => ({
  type: LocationActionTypes.FETCH_LOCATION,
});

export const fetchLocationSuccessActionCreator = (
  location: string,
): LocationActions => ({
  type: LocationActionTypes.FETCH_LOCATION_SUCCESS,
  payload: location,
});

export const fetchLocationErrorActionCreator = (
  errorMessage: string,
): LocationActions => ({
  type: LocationActionTypes.FETCH_LOCATION_ERROR,
  payload: errorMessage,
});

export const updateLocationNameActionCreator = (
  location: string,
): LocationActions => ({
  type: LocationActionTypes.UPDATE_LOCATION,
  payload: location,
});

export const updateCoordinatesActionCreator = (
  coordinates: CoordinatesType,
): LocationActions => ({
  type: LocationActionTypes.UPDATE_COORDINATES,
  payload: coordinates,
});
