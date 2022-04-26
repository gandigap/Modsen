import styled from 'styled-components';

export const DropDownContainer = styled.div`
  width: 200px;
  margin: 0 auto;
`;

export const DropDownButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-decoration: none;
`;

export const DropDownButtonText = styled.span`
  text-transform: uppercase;
`;

export const DropDownList = styled.div`
  position: absolute;
  width: 200px;
  list-style: none;
  display: flex;
  flex-direction: column;

  &.hide_select_mode {
    display: none;
  }
`;

export const DropDownListItem = styled.button`
  display: inline-block;
  text-transform: uppercase;
  text-align: start;

  &:hover {
    opacity: 0.9;
  }
`;
