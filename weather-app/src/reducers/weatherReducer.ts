import { FETCH_WEATHER } from 'constants/'
import { WeatherActions } from 'types/actionTypes'
import WeatherStateType from 'types/stateTypes'

const initialState = {
  weatherData: { data: {} },
  loading: false,
  error: '',
}

const weatherReducer = (state = initialState, action: WeatherActions): WeatherStateType => {
  switch (action.type) {
    case FETCH_WEATHER:
      return { ...state, loading: true }
    default:
      return state
  }
}

export default weatherReducer
