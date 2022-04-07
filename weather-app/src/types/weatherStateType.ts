import { WeatherDataType } from './weatherDataType'

export interface WeatherStateType {
  weatherData: WeatherDataType
  loading: boolean
  error: null | string
}
