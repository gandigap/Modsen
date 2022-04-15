/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from 'react';
import { ToDoListDataType } from 'types';
import { getListAfterAdd } from 'utils';
import { StyledToDoListController } from './styles';

const ToDoListController = () => {
  const [timeValue, setTimeValue] = useState('');
  const [toDoValue, setToDoValue] = useState('');

  const addToDo = () => {
    const anotherList: ToDoListDataType[] = JSON.parse(
      localStorage.getItem('toDoList') || '[]',
    );

    localStorage.setItem(
      'toDoList',
      JSON.stringify(
        getListAfterAdd(anotherList || [], { timeValue, toDoValue }),
      ),
    );
  };

  const changeInputValue =
    (type: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      type === 'time'
        ? setTimeValue(e.target.value)
        : setToDoValue(e.target.value);
    };

  return (
    <StyledToDoListController>
      <div>
        <button
          type="button"
          onClick={addToDo}
          disabled={!timeValue || !toDoValue}
        >
          +
        </button>
        <input
          type="time"
          value={timeValue}
          onChange={changeInputValue('time')}
        />
        <input
          type="text"
          value={toDoValue}
          onChange={changeInputValue('toDo')}
        />
      </div>
    </StyledToDoListController>
  );
};

export default ToDoListController;
