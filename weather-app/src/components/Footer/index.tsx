/* eslint-disable max-len */
import { useTypedSelector } from 'hooks';
import React from 'react';

import { StyledFooter } from './styles';

const Footer = () => {
  const { weatherData } = useTypedSelector((state) => state.weatherState);
  return (
    <StyledFooter>
      {weatherData.length && weatherData.map((el) => <p key={el.date}>{el.tempDay}</p>)}
    </StyledFooter>
  );
};

export default Footer;
