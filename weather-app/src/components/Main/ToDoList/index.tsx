/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useState, useEffect } from 'react';

import { ToDoListDataType } from 'types';
import { localeStorageItems, text } from 'constant';
import ToDoListController from './ToDoListController';
import ToDoListItem from './ToDoListItem';

import { StyledToDoList, StyledToDoListTitle } from './styles';

const ToDoList: React.FC = () => {
  const [toDoList, setToDoList] = useState<ToDoListDataType[] | null>(null);

  const deleteToDo = (indexEl: number) => {
    localStorage.setItem(
      localeStorageItems.toDoList,
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
      <StyledToDoListTitle>{text.toDolist}</StyledToDoListTitle>
      {list()}
      <ToDoListController />
    </StyledToDoList>
  );
};

export default ToDoList;
