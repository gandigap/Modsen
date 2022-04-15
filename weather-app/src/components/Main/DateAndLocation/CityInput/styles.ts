import styled from 'styled-components';

export const StyledCityInput = styled.input`
  background-color: transparent;
  font-size: 36px;
  border: none;
  text-align: right;
  max-width: 400px;

  &:focus {
    outline: none;
  }
`;

export const StyledCityInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

export const StyledCoutryCode = styled.label`
  font-size: 24px;
  font-weight: bold;
`;
