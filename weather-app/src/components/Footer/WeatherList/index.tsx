/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';

import { useTypedSelector } from 'hooks';
import { locationStateSelector, weatherStateSelector } from 'selectors';
import { Spinner } from 'components/Spinner';
import { ErrorComponent } from 'components/ErrorComponent';

import Today from './Today';
import WeatherListItem from './WeatherListItem';
import { StyledWeatherList, StyledWeatherListContainer } from './styles';

const WeatherList: React.FC = () => {
  const { weatherData, weatherLoading, weatherStateError } =
    useTypedSelector(weatherStateSelector);
  const { locationStateError } = useTypedSelector(locationStateSelector);

  const renderWeatherListItems = useMemo(
    () =>
      weatherData &&
      weatherData
        .filter((_, index) => index)
        .map((el) => <WeatherListItem key={el.date} {...el} />),
    [weatherData],
  );

  if (weatherLoading) return <Spinner />;
  if (weatherStateError)
    return <ErrorComponent errorMessage={weatherStateError} />;
  if (locationStateError) return null;
  return (
    <StyledWeatherList>
      <Today />
      <StyledWeatherListContainer>
        {renderWeatherListItems}
      </StyledWeatherListContainer>
    </StyledWeatherList>
  );
};

export default WeatherList;
