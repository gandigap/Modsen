import React from 'react';
import { ToDoListDataType } from 'types';
import { StyledToDoListItem } from './styles';

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
      <span>{timeValue}</span>
      <span>{toDoValue}</span>
      <button type="button" onClick={some}>
        Click
      </button>
    </StyledToDoListItem>
  );
};

export default ToDoListItem;
