import styled from 'styled-components';

export const StyledClock = styled.div`
  display: flex;
  align-items: end;
  font-weight: bold;

  @media (max-width: 576px) {
    align-items: baseline;
  }
`;

export const StyledTime = styled.div`
  font-size: 70px;

  @media (max-width: 576px) {
    font-size: 40px;
  }
`;

export const StyledAmPm = styled.div`
  font-size: 40px;
  margin: 0 10px;

  @media (max-width: 576px) {
    font-size: 40px;
  }
`;
