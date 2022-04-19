/* eslint-disable max-len */
import React from 'react';

import WeatherList from './WeatherList';
import ApiSelector from './ApiSelector';

import { StyledFooter } from './styles';

const Footer: React.FC = () => (
  <StyledFooter>
    <ApiSelector />
    <WeatherList />
  </StyledFooter>
);

export default Footer;
