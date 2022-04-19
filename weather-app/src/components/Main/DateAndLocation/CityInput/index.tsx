/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector, useDebounce } from 'hooks';
import {
  fetchWeatherActionCreator,
  updateLocationNameActionCreator,
} from 'actions';
import { classNames, text } from 'constant';

import {
  StyledCityInput,
  StyledCityInputContainer,
  StyledCoutryCode,
} from './styles';

const CityInput: React.FC = () => {
  const { location, countryCode } = useTypedSelector(
    (state) => state.locationState,
  );

  const [locationName, setLocationName] = useState('');

  const dispatch = useDispatch();

  const updateLocationName = (value: string) => {
    value
      ? dispatch(updateLocationNameActionCreator(value))
      : setLocationName(location);
    dispatch(fetchWeatherActionCreator());
  };

  const debounceHandleChangeInputValue = useDebounce(updateLocationName, 2000);

  const handleChangeInputValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const refactorVal = value.charAt(0).toUpperCase() + value.slice(1);
      setLocationName(refactorVal);
      debounceHandleChangeInputValue(refactorVal);
    },
    [debounceHandleChangeInputValue],
  );

  useEffect(() => {
    location && setLocationName(location);
  }, [location]);

  return (
    <StyledCityInputContainer className={classNames.cityIputContainer}>
      <StyledCityInput
        type="text"
        value={locationName}
        onChange={handleChangeInputValue}
        style={{ width: `${(locationName.length + 1) * 20}${text.px}` }}
      />
      {countryCode && <StyledCoutryCode>{countryCode}</StyledCoutryCode>}
    </StyledCityInputContainer>
  );
};

export default CityInput;
