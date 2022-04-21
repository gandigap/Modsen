/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from 'hooks';
import { changeWeatherApi, fetchWeather } from 'actions';
import { weatherStateSelector } from 'selectors';
import {
  localeStorageItems,
  apiNames,
  text,
  defaultValues,
  classNames,
} from 'constant';

import {
  DropDownButton,
  DropDownContainer,
  DropDownButtonText,
  DropDownListItem,
  DropDownList,
} from './styles';

const ApiSelector: React.FC = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { nameAPI } = useTypedSelector(weatherStateSelector);

  const changeView = () => {
    setIsOpen(!isOpen);
  };

  const changeMode = (e: React.MouseEvent<HTMLButtonElement>) => {
    changeView();
    const value = e.currentTarget.textContent;
    localStorage.setItem(localeStorageItems.apiName, JSON.stringify(value));
    value && dispatch(changeWeatherApi(value));
    dispatch(fetchWeather());
  };

  return (
    <DropDownContainer onClick={changeView}>
      <DropDownButton>
        <DropDownButtonText>{nameAPI}</DropDownButtonText>
        <DropDownButtonText>
          {isOpen ? text.arrowTop : text.arrowBottom}
        </DropDownButtonText>
      </DropDownButton>
      <DropDownList
        className={
          isOpen ? defaultValues.emptyString : classNames.hideSelectMode
        }
      >
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
