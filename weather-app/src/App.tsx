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
} from 'actions';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const getCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }: GeolocationPosition) => {
        const coordinates = {
          lat: coords.latitude,
          lon: coords.longitude,
        };
        dispatch(updateCoordinatesActionCreator(coordinates));
        dispatch(fetchLocationActionCreator());
      },
      (error: GeolocationPositionError) => {
        dispatch(fetchLocationErrorActionCreator(error.message));
      },
    );
  };

  useEffect(() => {
    getCoordinates();
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
