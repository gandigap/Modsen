/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { ToDoListDataType } from 'types';
import { StyledToDoList } from './styles';
import ToDoListController from './ToDoListController';
import ToDoListItem from './ToDoListItem';

const ToDoList = () => {
  const [toDoList, setToDoList] = useState<ToDoListDataType[] | null>(null);

  const deleteToDo = (indexEl: number) => {
    localStorage.setItem(
      'toDoList',
      JSON.stringify(
        toDoList && toDoList.filter((_, index) => indexEl !== index),
      ),
    );
  };

  const list = () => {
    return (
      toDoList &&
      toDoList.map((toDoListItem, index) => {
        return (
          <ToDoListItem
            key={`${toDoListItem.timeValue} + ${index}`}
            info={toDoListItem}
            handleDelete={deleteToDo}
            index={index}
          />
        );
      })
    );
  };

  useEffect(() => {
    setToDoList(JSON.parse(localStorage.getItem('toDoList') || '[]'));
  }, [toDoList]);

  return (
    <StyledToDoList>
      {list()}
      <ToDoListController />
    </StyledToDoList>
  );
};

export default ToDoList;
