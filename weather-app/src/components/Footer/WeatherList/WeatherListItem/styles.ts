import styled from 'styled-components';

export const StyledWeatherListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledWeatherListItemIcon = styled.img`
  width: 40px;
  border-radius: 100%;
`;

export const StyledWeatherListItemTemp = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

export const StyledWeatherListItemWeekday = styled.p`
  font-size: 14px;
  padding: 5px;
  width: 30px;
  text-align: center;
  border-radius: 10px;
  background-color: white;
`;

export const StyledWeatherListItemWind = styled.p`
  padding: 2px;
  font-weight: bold;
  font-size: 16px;
`;
