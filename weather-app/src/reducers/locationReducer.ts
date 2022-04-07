import { FETCH_LOCATION, FETCH_LOCATION_SUCCESS, FETCH_LOCATION_ERROR } from 'constants/'
import { LocationStateType, LocationActions } from 'types'

const initialState = {
  location: {
    coordinates: {
      latitude: '',
      Longitude: '',
    },
    city: '',
  },
  loading: false,
  error: null,
}

const locationReducer = (state = initialState, action: LocationActions): LocationStateType => {
  switch (action.type) {
    case FETCH_LOCATION:
      return {
        loading: true,
        error: null,
        location: {
          coordinates: {
            latitude: '',
            longitude: '',
          },
          city: '',
        },
      }
    case FETCH_LOCATION_SUCCESS:
      return { loading: false, error: null, location: action.payload }
    case FETCH_LOCATION_ERROR:
      return {
        loading: false,
        error: action.payload,
        location: {
          coordinates: {
            latitude: '',
            longitude: '',
          },
          city: '',
        },
      }
    default:
      return state
  }
}

export default locationReducer
