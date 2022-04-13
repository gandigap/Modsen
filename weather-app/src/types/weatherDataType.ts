export type OpenWeatherApicDataType = {
  data: { daily: OpenWeatherApicDataTypeDaily[] }
};

export type OpenWeatherApicDataTypeDaily = {
  dt: number
  humidity: number
  temp: { day: number; night: number }
  weather: [
    {
      description: string
      icon: string
      main: string
    },
  ]
};
