import { WeatherDataType } from './weatherDataType'

interface WeatherStateType {
  weatherData: WeatherDataType
  loading: boolean
  error: string
}

export default WeatherStateType
