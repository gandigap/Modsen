import { CurrentWeatherDataType } from './weatherDataType';

export interface WeatherStateType {
  nameAPI: string;
  weatherData: CurrentWeatherDataType[];
  weatherLoading: boolean;
  weatherStateError: null | string;
}

export enum WeatherActionTypes {
  FETCH_WEATHER = 'FETCH_WEATHER',
  FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS',
  FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR',
  CHANGE_WEATHER_API = 'CHANGE_WEATHER_API',
}

interface FetchWeatherAction {
  type: WeatherActionTypes.FETCH_WEATHER;
}

interface FetchWeatherSuccessAction {
  type: WeatherActionTypes.FETCH_WEATHER_SUCCESS;
  payload: CurrentWeatherDataType[];
}

interface FetchWeatherErrorAction {
  type: WeatherActionTypes.FETCH_WEATHER_ERROR;
  payload: string;
}

interface ChangeWeatherApiAction {
  type: WeatherActionTypes.CHANGE_WEATHER_API;
  payload: string;
}

export type WeatherActions =
  | FetchWeatherAction
  | FetchWeatherErrorAction
  | FetchWeatherSuccessAction
  | ChangeWeatherApiAction;
