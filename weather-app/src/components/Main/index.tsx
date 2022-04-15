import React from 'react';

import ApiSelector from './DateAndLocation/ApiSelector';
import ToDoList from './ToDoList';
import DateAndLocation from './DateAndLocation';

import { StyledMain } from './styles';

const Main: React.FC = () => {
  return (
    <StyledMain>
      <DateAndLocation />
      <ApiSelector />
      <ToDoList />
    </StyledMain>
  );
};

export default Main;
