import { apiNames } from 'constants/';
import { useTypedSelector } from 'hooks';
import React from 'react';
import { CurrentWeatherDataType } from 'types';
import {
  StyledWeatherListItem,
  StyledWeatherListItemIcon,
  StyledWeatherListItemTemp,
  StyledWeatherListItemWeekday,
  StyledWeatherListItemWind,
} from './styles';

const WeatherListItem = ({
  date,
  temp,
  weatherIcon,
  weatherMain,
  wind,
}: CurrentWeatherDataType) => {
  const { nameAPI, weatherLoading, weatherStateError } = useTypedSelector(
    (state) => state.weatherState,
  );

  if (weatherLoading) return <div>loading</div>;
  if (weatherStateError) return <div>error</div>;

  return (
    <StyledWeatherListItem>
      <StyledWeatherListItemWeekday>
        {[...date.split(' ')][0]}
      </StyledWeatherListItemWeekday>
      <StyledWeatherListItemWind>{`${wind} m/c`}</StyledWeatherListItemWind>
      <StyledWeatherListItemIcon
        src={
          nameAPI === apiNames.openWeather
            ? `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`
            : `https://www.weatherbit.io/static/img/icons/${weatherIcon}.png`
        }
        alt={weatherMain}
      />

      <StyledWeatherListItemTemp>{`${temp}°`}</StyledWeatherListItemTemp>
    </StyledWeatherListItem>
  );
};

export default WeatherListItem;
