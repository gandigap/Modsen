import styled from 'styled-components';

export const StyledToDoListItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;

  &:hover {
    & button {
      display: block;
    }
  }
`;

export const StyledToDoListItemTime = styled.span`
  padding: 2px;
  font-size: 20px;
  background-color: white;
`;

export const StyledToDoListItemText = styled.span`
  margin: 5px;
  font-style: italic;
`;

export const StyledToDoListItemDeleteButton = styled.button`
  display: none;
`;
