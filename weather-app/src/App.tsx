/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect } from 'react';

import Footer from 'components/Footer';
import Main from 'components/Main';

import GlobalStyle from 'globalStyle';
import { StyledApp } from 'style';
import { useDispatch } from 'react-redux';
import {
  fetchLocationErrorActionCreator,
  updateCoordinatesActionCreator,
  fetchLocationActionCreator,
  updateLocationNameActionCreator,
  updateCountyCodeActionCreator,
  fetchWeatherSuccessActionCreator,
} from 'actions';
import { localeStorageItems } from 'constants/localeStorageItems';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const getCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }: GeolocationPosition) => {
        const coordinates = {
          lat: coords.latitude,
          lon: coords.longitude,
        };
        localStorage.setItem('coordinates', JSON.stringify(coordinates));
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
    !coordinates
      ? getCoordinates()
      : dispatch(updateCoordinatesActionCreator(JSON.parse(coordinates)));
    location && dispatch(updateLocationNameActionCreator(JSON.parse(location)));
    country && dispatch(updateCountyCodeActionCreator(JSON.parse(country)));
    weatherData &&
      dispatch(fetchWeatherSuccessActionCreator(JSON.parse(weatherData)));
  }, []);

  return (
    <StyledApp>
      <GlobalStyle />
      <Main />
      <Footer />
    </StyledApp>
  );
};

export default App;
