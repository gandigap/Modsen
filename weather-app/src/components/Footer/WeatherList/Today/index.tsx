import React from 'react';

import { useTypedSelector } from 'hooks';

import { StyledToday, StyledTodayIcon } from './styles';

const Today: React.FC = () => {
  const { weatherData } = useTypedSelector((state) => state.weatherState);

  return (
    <StyledToday>
      <div>Today</div>
      {weatherData[0] && (
        <StyledTodayIcon
          src={`https://openweathermap.org/img/wn/${weatherData[0].weatherMain}@2x.png`}
          alt={weatherData[0].weatherMain}
        />
      )}
    </StyledToday>
  );
};

export default Today;
