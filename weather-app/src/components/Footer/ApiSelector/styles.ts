import styled from 'styled-components';

export const DropDownContainer = styled.div.attrs(
  (props: { color: string }) => props,
)`
  width: 200px;
  margin: 0 auto;
  background-color: ${(props) => props.color};
`;

export const DropDownButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  width: 100%;
  text-decoration: none;
  cursor: pointer;
  border: none;
  background: transparent;
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
  background-color: ${(props) => props.color};

  &.hide_select_mode {
    display: none;
  }
`;

export const DropDownListItem = styled.button`
  display: inline-block;
  cursor: pointer;
  text-transform: uppercase;
  background: transparent;
  border: none;
  text-align: start;

  &:hover {
    opacity: 0.9;
  }
`;
