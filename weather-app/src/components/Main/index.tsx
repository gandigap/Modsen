import React from 'react';

import ToDoList from './ToDoList';
import DateAndLocation from './DateAndLocation';

import { StyledMain } from './styles';

const Main: React.FC = () => {
  return (
    <StyledMain>
      <DateAndLocation />
      <ToDoList />
    </StyledMain>
  );
};

export default Main;
