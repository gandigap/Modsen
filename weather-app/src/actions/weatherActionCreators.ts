import { FETCH_WEATHER, FETCH_WEATHER_SUCCESS } from 'constants/'
import { WeatherActions } from 'types'

export const fetchWeatherActionCreator = (): WeatherActions => ({
  type: FETCH_WEATHER,
})

export const fetchWeatherSuccessActionCreator = (payload: any): WeatherActions => ({
  type: FETCH_WEATHER_SUCCESS,
  payload,
})
