export interface LocationStateType {
  location: string
  loading: boolean
  error: null | string
}

export enum LocationActionTypes {
  FETCH_LOCATION = 'FETCH_LOCATION',
  FETCH_LOCATION_SUCCESS = 'FETCH_LOCATION_SUCCESS',
  FETCH_LOCATION_ERROR = 'FETCH_LOCATION_ERROR',
}

interface FetchLocationAction {
  type: LocationActionTypes.FETCH_LOCATION
}

interface FetchLocationSuccessAction {
  type: LocationActionTypes.FETCH_LOCATION_SUCCESS
  payload: string
}

interface FetchLocationErrorAction {
  type: LocationActionTypes.FETCH_LOCATION_ERROR
  payload: string
}

export type LocationActions =
  | FetchLocationAction
  | FetchLocationSuccessAction
  | FetchLocationErrorAction
