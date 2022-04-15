import { apiNames } from 'constants/';
import { SubTotalWeatherDataType, CurrentWeatherDataType } from 'types';
import { getDate } from './dateUtils';

export const getDataFromOpenWeatherApi = (
  nameApi: string,
  weatherInfo: SubTotalWeatherDataType,
) => {
  const { daily, data } = weatherInfo;
  const result: CurrentWeatherDataType[] =
    nameApi === apiNames.openWeather
      ? daily &&
        daily.map((dayInfo) => ({
          date: getDate(dayInfo.dt),
          temp: dayInfo.temp.day,
          weatherIcon: dayInfo.weather[0].icon,
          weatherMain: dayInfo.weather[0].main,
          wind: dayInfo.wind_speed,
        }))
      : data &&
        data.map((dayInfo) => ({
          date: getDate(dayInfo.ts),
          temp: dayInfo.temp,
          weatherIcon: dayInfo.weather.icon,
          weatherMain: dayInfo.weather.description,
          wind: dayInfo.wind_spd,
        }));
  return result && result.filter((_, index) => index < 7);
};
