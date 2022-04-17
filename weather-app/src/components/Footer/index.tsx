/* eslint-disable max-len */
import React from 'react';

import WeatherList from './WeatherList';

import { StyledFooter } from './styles';
import ApiSelector from './ApiSelector';

const Footer: React.FC = () => (
  <StyledFooter>
    <ApiSelector />
    <WeatherList />
  </StyledFooter>
);

export default Footer;
