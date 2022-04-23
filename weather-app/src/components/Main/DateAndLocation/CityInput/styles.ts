import styled from 'styled-components';

interface StyledCityInputProps {
  customWidth: string;
}

export const StyledCityInputContainer = styled.div`
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  text-align: right;
`;

export const StyledCityInput = styled.input<StyledCityInputProps>`
  font-size: 36px;
  text-align: right;
  width: ${(props) => props.customWidth};
`;

export const StyledCoutryCode = styled.label`
  font-size: 24px;
  font-weight: bold;
`;
