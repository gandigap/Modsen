import React from 'react';

import { useTypedSelector } from 'hooks';
import { CurrentWeatherDataType } from 'types';
import { getUrlIcon } from 'utils';
import { text } from 'constant';
import { weatherStateSelector } from 'selectors';

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
  const { nameAPI } = useTypedSelector(weatherStateSelector);

  return (
    <StyledWeatherListItem>
      <StyledWeatherListItemWeekday>
        {[...date.split(' ')][0]}
      </StyledWeatherListItemWeekday>
      <StyledWeatherListItemWind>{`${wind} ${text.mc}`}</StyledWeatherListItemWind>
      <StyledWeatherListItemIcon
        src={getUrlIcon(nameAPI, weatherIcon)}
        alt={weatherMain}
        title={weatherMain}
      />
      <StyledWeatherListItemTemp>{`${temp}${text.degree}`}</StyledWeatherListItemTemp>
    </StyledWeatherListItem>
  );
};

export default WeatherListItem;
