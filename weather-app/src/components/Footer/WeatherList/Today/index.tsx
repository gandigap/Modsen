import React from 'react';

import { useTypedSelector } from 'hooks';
import { text } from 'constant';
import { getUrlIcon } from 'utils';

import {
  StyledToday,
  StyledTodayContainer,
  StyledTodayIcon,
  StyledTodayTitle,
} from './styles';

const Today: React.FC = () => {
  const { weatherData, nameAPI } = useTypedSelector(
    (state) => state.weatherState,
  );

  return (
    <StyledToday>
      {weatherData[0] && (
        <StyledTodayContainer>
          <StyledTodayTitle>{`${text.today} ${weatherData[0].temp}°`}</StyledTodayTitle>

          <StyledTodayIcon
            src={getUrlIcon(nameAPI, weatherData[0].weatherIcon)}
            alt={weatherData[0].weatherMain}
            title={weatherData[0].weatherMain}
          />
        </StyledTodayContainer>
      )}
    </StyledToday>
  );
};

export default Today;
