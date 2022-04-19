/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect } from 'react';

import Footer from 'components/Footer';
import Main from 'components/Main';

import { useDispatch } from 'react-redux';
import {
  fetchLocationErrorActionCreator,
  updateCoordinatesActionCreator,
  fetchLocationActionCreator,
  updateLocationNameActionCreator,
  updateCountyCodeActionCreator,
  fetchWeatherSuccessActionCreator,
  changeWeatherApiActionCreator,
} from 'actions';
import { localeStorageItems } from 'constant';
import { useTypedSelector } from 'hooks';
import { getBackgroundUrlAndColor } from 'utils';

import { StyledApp } from 'style';
import GlobalStyle from 'globalStyle';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const weatherdata = useTypedSelector(
    (state) => state.weatherState.weatherData,
  );

  const backgroundAndColor = weatherdata[0]
    ? getBackgroundUrlAndColor(weatherdata[0].code)
    : getBackgroundUrlAndColor(800);

  const getCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }: GeolocationPosition) => {
        const coordinates = {
          lat: coords.latitude,
          lon: coords.longitude,
        };
        localStorage.setItem(
          localeStorageItems.coordinates,
          JSON.stringify(coordinates),
        );
        dispatch(updateCoordinatesActionCreator(coordinates));
        dispatch(fetchLocationActionCreator());
      },
      (error: GeolocationPositionError) => {
        dispatch(fetchLocationErrorActionCreator(error.message));
      },
    );
  };

  useEffect(() => {
    const coordinates = localStorage.getItem(localeStorageItems.coordinates);
    const location = localStorage.getItem(localeStorageItems.location);
    const country = localStorage.getItem(localeStorageItems.countryCode);
    const weatherData = localStorage.getItem(localeStorageItems.weatherData);
    const apiName = localStorage.getItem(localeStorageItems.apiName);
    !coordinates
      ? getCoordinates()
      : dispatch(updateCoordinatesActionCreator(JSON.parse(coordinates)));
    location && dispatch(updateLocationNameActionCreator(JSON.parse(location)));
    country && dispatch(updateCountyCodeActionCreator(JSON.parse(country)));
    weatherData &&
      dispatch(fetchWeatherSuccessActionCreator(JSON.parse(weatherData)));
    apiName && dispatch(changeWeatherApiActionCreator(JSON.parse(apiName)));
  }, []);

  return (
    <StyledApp backgroundAndColor={backgroundAndColor}>
      <GlobalStyle />
      <Main />
      <Footer />
    </StyledApp>
  );
};

export default App;
