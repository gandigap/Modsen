/* eslint-disable import/no-anonymous-default-export */

import React, { useCallback } from 'react';
import Calculator from '../../components/Calculator';
import { useDispatch } from 'react-redux';
import { changeThemeAction } from '../../reducers/themeReducer';

/* import { PageLayout } from './layouts'; */

const SettingPage = () => {
  const dispatch = useDispatch();
  const changeTheme = useCallback(() => {
    dispatch(changeThemeAction());
  }, [dispatch]);

  return (
    <Calculator>
      <h3>Setting</h3>
      <button onClick={changeTheme}> change theme</button>
    </Calculator>
  );
};
export default SettingPage;
