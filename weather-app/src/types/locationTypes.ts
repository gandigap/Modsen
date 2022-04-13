import { CoordinatesType } from './locationDataType';

export interface LocationStateType {
  location: string;
  countryCode: string;
  coordinates: {
    lat: number;
    lon: number;
  };
  locationLoading: boolean;
  locationStateError: null | string;
}

export enum LocationActionTypes {
  FETCH_LOCATION = 'FETCH_LOCATION',
  FETCH_LOCATION_SUCCESS = 'FETCH_LOCATION_SUCCESS',
  FETCH_LOCATION_ERROR = 'FETCH_LOCATION_ERROR',
  UPDATE_LOCATION = 'UPDATE_LOCATION',
  UPDATE_COORDINATES = 'UPDATE_COORDINATES',
  ERROR_UPDATE_COORDINATES = 'ERROR_UPDATE_COORDINATES',
  UPDATE_COUNTRY_CODE = 'UPDATE_COUNTRY_CODE',
}

interface FetchLocationAction {
  type: LocationActionTypes.FETCH_LOCATION;
}

interface FetchLocationSuccessAction {
  type: LocationActionTypes.FETCH_LOCATION_SUCCESS;
  payload: string;
}

interface FetchLocationErrorAction {
  type: LocationActionTypes.FETCH_LOCATION_ERROR;
  payload: string;
}

interface UpdateLocationNameAction {
  type: LocationActionTypes.UPDATE_LOCATION;
  payload: string;
}

interface UpdateCoordinatesAction {
  type: LocationActionTypes.UPDATE_COORDINATES;
  payload: CoordinatesType;
}

interface ErrorUpdateCoordinatesAction {
  type: LocationActionTypes.ERROR_UPDATE_COORDINATES;
  payload: string;
}

interface UpdateCountryCodeAction {
  type: LocationActionTypes.UPDATE_COUNTRY_CODE;
  payload: string;
}

export type LocationActions =
  | FetchLocationAction
  | FetchLocationSuccessAction
  | FetchLocationErrorAction
  | UpdateLocationNameAction
  | UpdateCoordinatesAction
  | UpdateCountryCodeAction
  | ErrorUpdateCoordinatesAction;
