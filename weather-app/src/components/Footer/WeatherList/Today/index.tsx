import React from 'react';

import { useTypedSelector } from 'hooks';
import { StyledToday, StyledTodayIcon } from './styles';

const Today = () => {
  const { weatherData } = useTypedSelector((state) => state.weatherState);
  const { weatherIcon, weatherMain } = weatherData[0];
  return (
    <StyledToday>
      <div>Today</div>
      <StyledTodayIcon
        src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        alt={weatherMain}
      />
    </StyledToday>
  );
};

export default Today;
