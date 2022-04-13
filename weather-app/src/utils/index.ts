/* eslint-disable implicit-arrow-linebreak */
import { OpenWeatherApicDataTypeDaily } from 'types';

export const getDate = (timeStamp: number): string => new Date(timeStamp * 1000).toDateString();

export const getDataFromOpenWeatherApi = (daily: OpenWeatherApicDataTypeDaily[]) =>
  daily.map((dayData) => ({
    date: getDate(dayData.dt),
    tempDay: dayData.temp.day,
    tempNight: dayData.temp.night,
    weatherDescription: dayData.weather[0].description,
    weatherIcon: dayData.weather[0].icon,
    weatherMain: dayData.weather[0].main,
  }));
