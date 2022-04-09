import { LocationActions, LocationActionTypes } from 'types'

export const fetchLocationActionCreator = (): LocationActions => {
  return {
    type: LocationActionTypes.FETCH_LOCATION,
  }
}

export const fetchLocationErrorActionCreator = (errorMessage: string): LocationActions => {
  return {
    type: LocationActionTypes.FETCH_LOCATION_ERROR,
    payload: errorMessage,
  }
}
