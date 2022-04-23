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

export const StyledToDoListItemTime = styled.time`
  padding: 2px;
  font-size: 20px;
  background-color: white;
  border-radius: 10px;
`;

export const StyledToDoListItemText = styled.span`
  margin: 5px;
  font-style: italic;
  font-weight: bold;
`;

export const StyledToDoListItemDeleteButton = styled.button`
  display: none;
`;
