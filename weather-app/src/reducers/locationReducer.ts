import { LocationStateType, LocationActions, LocationActionTypes } from 'types'

const initialState = {
  location: '',
  loading: false,
  error: null,
}

const locationReducer = (state = initialState, action: LocationActions): LocationStateType => {
  switch (action.type) {
    case LocationActionTypes.FETCH_LOCATION:
      return { ...state, loading: true }
    case LocationActionTypes.FETCH_LOCATION_SUCCESS:
      return { ...state, loading: false, location: action.payload }
    case LocationActionTypes.FETCH_LOCATION_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default locationReducer
