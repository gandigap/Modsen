import {
  changeWeatherApiActionCreator,
  fetchWeatherActionCreator,
} from 'actions';
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

const ApiSelector = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { nameAPI } = useTypedSelector((state) => state.weatherState);

  const changeView = () => {
    setIsOpen(!isOpen);
  };

  const changeMode = (e: any) => {
    changeView();
    dispatch(changeWeatherApiActionCreator(e.target.textContent));
    dispatch(fetchWeatherActionCreator());
  };

  return (
    <DropDownContainer>
      <DropDownButton onClick={changeView}>
        <DropDownButtonText>{nameAPI}</DropDownButtonText>
        <DropDownButtonText>{isOpen ? '▲' : '▼'}</DropDownButtonText>
      </DropDownButton>
      <DropDownList className={isOpen ? '' : 'hide_select_mode'}>
        <DropDownListItem onClick={changeMode}>
          {apiNames.openWeather}
        </DropDownListItem>
        <DropDownListItem type="button" onClick={changeMode}>
          {apiNames.weatherbit}
        </DropDownListItem>
      </DropDownList>
    </DropDownContainer>
  );
};

export default ApiSelector;
