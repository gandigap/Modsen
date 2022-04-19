/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from 'react';

import { inputValues, localeStorageItems, text, defaultValues } from 'constant';
import { ToDoListDataType } from 'types';
import { getListAfterAdd } from 'utils';

import {
  StyledToDoListController,
  StyledToDoListControllerButton,
  StyledToDoListControllerInputText,
  StyledToDoListControllerInputTime,
} from './styles';

const ToDoListController = () => {
  const [timeValue, setTimeValue] = useState('');
  const [toDoValue, setToDoValue] = useState('');

  const addToDo = () => {
    const anotherList: ToDoListDataType[] = JSON.parse(
      localStorage.getItem(localeStorageItems.toDoList) ||
        defaultValues.emptyArray,
    );

    localStorage.setItem(
      localeStorageItems.toDoList,
      JSON.stringify(
        getListAfterAdd(anotherList || [], { timeValue, toDoValue }),
      ),
    );
  };

  const changeInputValue =
    (type: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      type === inputValues.time
        ? setTimeValue(e.target.value)
        : setToDoValue(e.target.value);
    };

  return (
    <StyledToDoListController>
      <StyledToDoListControllerButton
        onClick={addToDo}
        disabled={!timeValue || !toDoValue}
      >
        {text.plus}
      </StyledToDoListControllerButton>
      <StyledToDoListControllerInputTime
        type="time"
        value={timeValue}
        onChange={changeInputValue(inputValues.time)}
      />
      <StyledToDoListControllerInputText
        type="text"
        value={toDoValue}
        placeholder={defaultValues.placeholder}
        onChange={changeInputValue(inputValues.toDo)}
      />
    </StyledToDoListController>
  );
};

export default ToDoListController;
