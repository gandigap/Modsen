import { changeWeatherApiActionCreator } from 'actions';
import { apiNames } from 'constants/api';
import { useTypedSelector } from 'hooks';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  DropDownButton,
  DropDownContainer,
  DropDownButtonText,
  DropDownListItem,
  DropDownList,
} from './styles';

const DropDownApi = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { nameAPI } = useTypedSelector((state) => state.weatherState);

  const changeView = () => {
    setIsOpen(!isOpen);
  };

  const changeMode = (e: any) => {
    changeView();
    dispatch(changeWeatherApiActionCreator(e.target.textContent));
  };

  return (
    <DropDownContainer>
      <DropDownButton onClick={changeView}>
        <DropDownButtonText>{nameAPI}</DropDownButtonText>
        <DropDownButtonText>{isOpen ? '▲' : '▼'}</DropDownButtonText>
      </DropDownButton>
      <DropDownList className={isOpen ? '' : 'hide_select_mode'}>
        <DropDownListItem onClick={changeMode}>{apiNames.openWeatherDaily}</DropDownListItem>
        <DropDownListItem type="button" onClick={changeMode}>
          {apiNames.weatherbit}
        </DropDownListItem>
      </DropDownList>
    </DropDownContainer>
  );
};

export default DropDownApi;
