import styled from 'styled-components';

export const StyledDateAndLocation = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
