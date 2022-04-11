import { WeatherActions, WeatherActionTypes, WeatherStateType } from 'types'

const initialState: WeatherStateType = {
  weatherData: { data: [] },
  loading: false,
  error: null,
}

const weatherReducer = (state = initialState, action: WeatherActions): WeatherStateType => {
  switch (action.type) {
    case WeatherActionTypes.FETCH_WEATHER:
      return { ...state, loading: true }
    case WeatherActionTypes.FETCH_WEATHER_SUCCESS:
      return { ...state, loading: false, weatherData: action.payload }
    default:
      return state
  }
}

export default weatherReducer
