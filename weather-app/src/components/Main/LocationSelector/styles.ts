import styled from 'styled-components';

export const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropDownButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  text-decoration: none;
  text-align: start;
  cursor: pointer;
  border: none;
`;

export const DropDownButtonText = styled.span`
  text-transform: uppercase;
`;

export const DropDownList = styled.div`
  list-style: none;

  &.hide_select_mode {
    display: none;
  }
`;

export const DropDownListItem = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
  }
`;
