import styled from 'styled-components';

export const StyledToDoListController = styled.div`
  font-weight: bold;

  input[type='time']::-webkit-calendar-picker-indicator {
    filter: invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg)
      brightness(95%) contrast(80%);
  }
`;

export const StyledToDoListControllerButton = styled.button`
  font-weight: bold;
`;

export const StyledToDoListControllerInputTime = styled.input`
  font-weight: bold;
`;

export const StyledToDoListControllerInputText = styled.input`
  font-weight: bold;
`;
