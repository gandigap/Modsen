import React from 'react';
import { CurrentWeatherDataType } from 'types';
import { StyledWeatherListItem } from './styles';

const WeatherListItem = ({
  date,
  temp,
  weatherIcon,
  weatherMain,
  wind,
}: CurrentWeatherDataType) => (
  <StyledWeatherListItem>
    <div>{date}</div>
    <div>{temp}</div>
    <div>{weatherIcon}</div>
    <div>{weatherMain}</div>
    <div>{wind}</div>
  </StyledWeatherListItem>
);

export default WeatherListItem;
