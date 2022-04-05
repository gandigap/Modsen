export enum WeatherActionTypes {
  FETCH_WEATHER = 'FETCH_WEATHER',
  FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS',
  FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR',
  ADD_WEATHER = 'ADD_WEATHER',
}

export interface WeatherList {
  [key: string]: WeatherInfo
}

interface FetchWeatherAction {
  type: WeatherActionTypes.FETCH_WEATHER
}

interface FetchWeatherSuccessAction {
  type: WeatherActionTypes.FETCH_WEATHER_SUCCESS
  payload: WeatherList
}

interface FetchWeatherErrorAction {
  type: WeatherActionTypes.FETCH_WEATHER_ERROR
  payload: string
}

interface AddAlbumAction {
  type: WeatherActionTypes.ADD_WEATHER
  payload: WeatherList
}

export type WeatherActions =
  | FetchWeatherAction
  | FetchWeatherErrorAction
  | FetchWeatherSuccessAction
  | AddAlbumAction

export interface WeatherInfo {
  Id: number
  title: string
}
