import styled from 'styled-components';

export const StyledToDoListItem = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;

  &:hover {
    & button {
      display: block;
    }
  }
`;

export const StyledToDoListItemTime = styled.span`
  font-size: 20px;
  color: white;
`;

export const StyledToDoListItemText = styled.span`
  margin: 5px;
  font-style: italic;
`;

export const StyledToDoListItemDeleteButton = styled.button`
  display: none;
  color: white;
  background: transparent;
  border: none;
`;
