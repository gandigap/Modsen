/* eslint-disable import/no-anonymous-default-export */

import React from 'react';
import Calculator from '../../components/Calculator';
import Header from '../../components/Header';

/* import { PageLayout } from './layouts'; */

const HomePage = () => {
  return (
    <Calculator>
      <Header />
      Hi
    </Calculator>
  );
};
export default HomePage;
