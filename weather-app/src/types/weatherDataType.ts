export type OpenWeatherApicDataType = {
  data: { daily: OpenWeatherApicDataTypeDaily[] };
};

export type CurrentWeatherDataType = {
  date: string;
  tempDay: number;
  tempNight: number;
  weatherDescription: string;
  weatherIcon: string;
  weatherMain: string;
};

export type OpenWeatherApicDataTypeDaily = {
  dt: number;
  humidity: number;
  temp: { day: number; night: number };
  weather: [
    {
      description: string;
      icon: string;
      main: string;
    },
  ];
};
