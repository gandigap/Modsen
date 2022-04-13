/* eslint-disable @typescript-eslint/default-param-last */
import { LocationStateType, LocationActions, LocationActionTypes } from 'types';

const initialState: LocationStateType = {
  location: '',
  countryCode: '',
  coordinates: {
    lat: 0,
    lon: 0,
  },
  locationLoading: false,
  locationStateError: null,
};

const locationReducer = (state = initialState, action: LocationActions): LocationStateType => {
  switch (action.type) {
    case LocationActionTypes.FETCH_LOCATION:
      return { ...state, locationLoading: true };
    case LocationActionTypes.FETCH_LOCATION_SUCCESS:
      return { ...state, locationLoading: false, location: action.payload };
    case LocationActionTypes.FETCH_LOCATION_ERROR:
      return { ...state, locationLoading: false, locationStateError: action.payload };
    case LocationActionTypes.UPDATE_LOCATION:
      return { ...state, location: action.payload };
    case LocationActionTypes.UPDATE_COORDINATES:
      return { ...state, coordinates: action.payload };
    case LocationActionTypes.UPDATE_COUNTRY_CODE:
      return { ...state, countryCode: action.payload };
    default:
      return state;
  }
};

export default locationReducer;
