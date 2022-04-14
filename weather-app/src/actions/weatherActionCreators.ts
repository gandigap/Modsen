import {
  WeatherActions,
  WeatherActionTypes,
  CurrentWeatherDataType,
} from 'types';

export const fetchWeatherActionCreator = (): WeatherActions => ({
  type: WeatherActionTypes.FETCH_WEATHER,
});

export const fetchWeatherSuccessActionCreator = (
  dataWeather: CurrentWeatherDataType[],
): WeatherActions => ({
  type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
  payload: dataWeather,
});

export const fetchWeatherErrorActionCreator = (
  errorMessage: string,
): WeatherActions => ({
  type: WeatherActionTypes.FETCH_WEATHER_ERROR,
  payload: errorMessage,
});

export const changeWeatherApiActionCreator = (
  nameApi: string,
): WeatherActions => ({
  type: WeatherActionTypes.CHANGE_WEATHER_API,
  payload: nameApi,
});
