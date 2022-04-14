/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */

import { apiNames } from 'constants/api';
import { CurrentWeatherDataType, SubTotalWeatherDataType } from 'types';
import { UrlParams } from 'types/urlApiParams';

export const getDate = (timeStamp: number): string =>
  new Date(timeStamp * 1000).toDateString();
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

export const getUrlApi = (params: UrlParams) => {
  const { type, location, lat, lon } = params;

  switch (type) {
    case apiNames.locationiq:
      return `https://us1.locationiq.com/v1/reverse.php?key=pk.6ac9639b7b2a2a0a688dbff51d3854c4&lat=${lat}&lon=${lon}&format=json`;
    case apiNames.openWeather:
      return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&units=metric&appid=b9263267a94c30aaafc8ee41fb19e494`;
    case apiNames.openWeatherGeocode:
      return `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=b9263267a94c30aaafc8ee41fb19e494`;
    case apiNames.weatherbit:
      return `https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&key=0ed3b712ceb34b3181b59d7b67057487`;
    default:
      return '';
  }
};
