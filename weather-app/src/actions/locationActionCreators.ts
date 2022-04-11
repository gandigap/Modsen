import { CoordinatesType, LocationActions, LocationActionTypes } from 'types'

export const fetchLocationActionCreator = (): LocationActions => {
  return {
    type: LocationActionTypes.FETCH_LOCATION,
  }
}

export const fetchLocationSuccessActionCreator = (location: string): LocationActions => {
  return {
    type: LocationActionTypes.FETCH_LOCATION_SUCCESS,
    payload: location,
  }
}

export const fetchLocationErrorActionCreator = (errorMessage: string): LocationActions => {
  return {
    type: LocationActionTypes.FETCH_LOCATION_ERROR,
    payload: errorMessage,
  }
}

export const updateLocationNameActionCreator = (location: string): LocationActions => {
  return { type: LocationActionTypes.UPDATE_LOCATION, payload: location }
}

export const updateCoordinatesActionCreator = (coordinates: CoordinatesType): LocationActions => {
  return { type: LocationActionTypes.UPDATE_COORDINATES, payload: coordinates }
}
