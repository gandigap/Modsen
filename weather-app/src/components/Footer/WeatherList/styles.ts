import styled from 'styled-components';

export const StyledWeatherList = styled.div`
  display: flex;
  padding: 10px 20px;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const StyledWeatherListContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;

  @media (max-width: 992px) {
    flex-wrap: wrap;
  }
`;
