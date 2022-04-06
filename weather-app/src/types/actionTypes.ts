interface FetchWeatherAction {
  type: string
}

interface FetchWeatherSuccessAction {
  type: string
  payload: string
}

interface FetchWeatherErrorAction {
  type: string
  payload: string
}

interface AddAlbumAction {
  type: string
  payload: string
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
