import { apiNames } from 'constant';
import { UrlParams } from 'types';

import thunderstorm from 'images/thunderstorm.jpg';
import drizzle from 'images/drizzle.jpg';
import rain from 'images/rain.jpg';
import snow from 'images/snow.jpg';
import atmosphere from 'images/atmosphere.jpg';
import clear from 'images/clear.jpg';
import clouds from 'images/clouds.jpg';

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

export const getUrlIcon = (nameApi: string, weatherIcon: string) => {
  switch (nameApi) {
    case apiNames.openWeather:
      return `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    default:
      return `https://www.weatherbit.io/static/img/icons/${weatherIcon}.png`;
  }
};

export const getBackgroundUrlAndColor = (weatherCode: number) => {
  console.log(clouds);
  if (weatherCode < 300)
    return { backgroundUrl: thunderstorm, color: '#9b9b9b' };
  if (weatherCode < 500) return { backgroundUrl: drizzle, color: '#444433' };
  if (weatherCode < 600) return { backgroundUrl: rain, color: '#000000' };
  if (weatherCode < 700) return { backgroundUrl: snow, color: '#222222' };
  if (weatherCode < 800) return { backgroundUrl: atmosphere, color: '#555555' };
  if (weatherCode === 800) return { backgroundUrl: clear, color: '#cc9999' };
  return { backgroundUrl: clouds, color: '#ff9900' };
};
/* { backgroundUrl: clouds, color: '#000' } */
