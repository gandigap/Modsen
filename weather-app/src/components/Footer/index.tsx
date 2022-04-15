/* eslint-disable max-len */
import React from 'react';

import { StyledFooter } from './styles';
import WeatherList from './WeatherList';
import Today from './WeatherList/Today';

const Footer = () => (
  <StyledFooter>
    <Today />
    <WeatherList />
  </StyledFooter>
);

export default Footer;
