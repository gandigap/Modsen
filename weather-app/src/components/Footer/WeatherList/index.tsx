/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { useTypedSelector } from 'hooks';
import Today from './Today';
import WeatherListItem from './WeatherListItem';

import { StyledWeatherList, StyledWeatherListContainer } from './styles';

const WeatherList: React.FC = () => {
  const { weatherData, weatherLoading, weatherStateError } = useTypedSelector(
    (state) => state.weatherState,
  );
  if (weatherLoading) return <div>loading</div>;
  if (weatherStateError) return <div>error</div>;
  const list = () =>
    weatherData &&
    weatherData
      .filter((_, index) => index)
      .map((el) => <WeatherListItem key={el.date} {...el} />);

  return (
    <StyledWeatherList>
      <Today />
      <StyledWeatherListContainer>{list()}</StyledWeatherListContainer>
    </StyledWeatherList>
  );
};

export default WeatherList;
