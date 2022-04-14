/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useTypedSelector } from 'hooks';

import { StyledWeatherList } from './styles';
import WeatherListItem from './WeatherListItem';

const WeatherList = () => {
  const { weatherData } = useTypedSelector((state) => state.weatherState);

  const list = () =>
    weatherData &&
    weatherData
      .filter((_, index) => index)
      .map((el) => <WeatherListItem key={el.date} {...el} />);

  return <StyledWeatherList>{list()}</StyledWeatherList>;
};

export default WeatherList;