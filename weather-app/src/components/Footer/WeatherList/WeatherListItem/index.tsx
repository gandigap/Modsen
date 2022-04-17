import React from 'react';

import { useTypedSelector } from 'hooks';
import { CurrentWeatherDataType } from 'types';
import { getUrlIcon } from 'utils';

import {
  StyledWeatherListItem,
  StyledWeatherListItemIcon,
  StyledWeatherListItemTemp,
  StyledWeatherListItemWeekday,
  StyledWeatherListItemWind,
} from './styles';

const WeatherListItem: React.FC<CurrentWeatherDataType> = ({
  date,
  temp,
  weatherIcon,
  weatherMain,
  wind,
}) => {
  const { nameAPI } = useTypedSelector((state) => state.weatherState);

  return (
    <StyledWeatherListItem>
      <StyledWeatherListItemWeekday>
        {[...date.split(' ')][0]}
      </StyledWeatherListItemWeekday>
      <StyledWeatherListItemWind>{`${wind} m/c`}</StyledWeatherListItemWind>
      <StyledWeatherListItemIcon
        src={getUrlIcon(nameAPI, weatherIcon)}
        alt={weatherMain}
        title={weatherMain}
      />

      <StyledWeatherListItemTemp>{`${temp}°`}</StyledWeatherListItemTemp>
    </StyledWeatherListItem>
  );
};

export default WeatherListItem;
