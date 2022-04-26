import {
  WeatherActions,
  WeatherActionTypes,
  CurrentWeatherDataType,
} from 'types';

export const fetchWeather = (): WeatherActions => ({
  type: WeatherActionTypes.FETCH_WEATHER,
});

export const fetchWeatherSuccess = (
  dataWeather: CurrentWeatherDataType[],
): WeatherActions => ({
  type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
  payload: dataWeather,
});

export const fetchWeatherError = (errorMessage: string): WeatherActions => ({
  type: WeatherActionTypes.FETCH_WEATHER_ERROR,
  payload: errorMessage,
});

export const changeWeatherApi = (nameApi: string): WeatherActions => ({
  type: WeatherActionTypes.CHANGE_WEATHER_API,
  payload: nameApi,
});
