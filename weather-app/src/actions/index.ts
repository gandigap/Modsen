import { FETCH_WEATHER, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR, ADD_WEATHER } from 'constants/'
import { WeatherActions } from 'types/actionTypes'

export const fetchWeatherActionCreator = (): WeatherActions => ({
  type: FETCH_WEATHER,
})

export const fetchWeatherSuccessActionCreator = (payload: any): WeatherActions => ({
  type: FETCH_WEATHER_SUCCESS,
  payload,
})

export const fetchWeatherErrorActionCreator = (payload: any): WeatherActions => ({
  type: FETCH_WEATHER_ERROR,
  payload,
})

export const addWeatherActionCreator = (payload: any): WeatherActions => ({
  type: ADD_WEATHER,
  payload,
})
