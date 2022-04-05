export type weatherData = {
  id: string
  title: string
  isCompleted: boolean
}

interface storeType {
  weatherData: weatherData[]
}

export default storeType
