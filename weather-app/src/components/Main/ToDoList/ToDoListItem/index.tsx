import React from 'react';

import { text } from 'constant';
import { ToDoListDataType } from 'types';

import {
  StyledToDoListItem,
  StyledToDoListItemDeleteButton,
  StyledToDoListItemText,
  StyledToDoListItemTime,
} from './styles';

interface ToDOListItemProps {
  info: ToDoListDataType;
  handleDelete: (index: number) => void;
  index: number;
}

const ToDoListItem: React.FC<ToDOListItemProps> = ({
  info,
  handleDelete,
  index,
}) => {
  const { timeValue, toDoValue } = info;
  const some = () => {
    handleDelete(index);
  };
  return (
    <StyledToDoListItem>
      <StyledToDoListItemTime>{timeValue}</StyledToDoListItemTime>
      <StyledToDoListItemText>{toDoValue}</StyledToDoListItemText>
      <StyledToDoListItemDeleteButton onClick={some}>
        {text.cross}
      </StyledToDoListItemDeleteButton>
    </StyledToDoListItem>
  );
};

export default ToDoListItem;
