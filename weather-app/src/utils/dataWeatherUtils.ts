import { apiNames } from 'constant';
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
          temp: Math.round(dayInfo.temp.day),
          weatherIcon: dayInfo.weather[0].icon,
          weatherMain: dayInfo.weather[0].main,
          wind: dayInfo.wind_speed,
          code: dayInfo.weather[0].id,
        }))
      : data &&
        data.map((dayInfo) => ({
          date: getDate(dayInfo.ts),
          temp: Math.round(dayInfo.temp),
          weatherIcon: dayInfo.weather.icon,
          weatherMain: dayInfo.weather.description,
          wind: dayInfo.wind_spd,
          code: dayInfo.weather.code,
        }));
  return result && result.filter((_, index) => index < 7);
};
