import { WeatherActions, WeatherActionTypes, WeatherDataType } from 'types'

export const fetchWeatherActionCreator = (): WeatherActions => ({
  type: WeatherActionTypes.FETCH_WEATHER,
})

export const fetchWeatherSuccessActionCreator = (payload: WeatherDataType): WeatherActions => ({
  type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
  payload,
})
