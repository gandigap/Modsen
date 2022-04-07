import { FETCH_WEATHER } from 'constants/'
import { WeatherActions, WeatherStateType } from 'types'

const initialState = {
  weatherData: { data: {} },
  loading: false,
  error: null,
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
