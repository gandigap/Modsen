import { WeatherActions, WeatherActionTypes, WeatherDataType } from 'types'

export const fetchWeatherActionCreator = (): WeatherActions => ({
  type: WeatherActionTypes.FETCH_WEATHER,
})

export const fetchWeatherSuccessActionCreator = (dataWeather: WeatherDataType): WeatherActions => ({
  type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
  payload: dataWeather,
})

export const fetchWeatherErrorActionCreator = (errorMessage: string): WeatherActions => ({
  type: WeatherActionTypes.FETCH_WEATHER_ERROR,
  payload: errorMessage,
})
