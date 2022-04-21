/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector, useDebounce } from 'hooks';
import { fetchWeather, updateLocationName } from 'actions';
import { classNames, text } from 'constant';
import { locationStateSelector } from 'selectors';

import {
  StyledCityInput,
  StyledCityInputContainer,
  StyledCoutryCode,
} from './styles';

const CityInput: React.FC = () => {
  const { location, countryCode } = useTypedSelector(locationStateSelector);

  const [locationName, setLocationName] = useState('');

  const dispatch = useDispatch();

  const updateLocation = (value: string) => {
    value ? dispatch(updateLocationName(value)) : setLocationName(location);
    dispatch(fetchWeather());
  };

  const debounceHandleChangeInputValue = useDebounce(updateLocation, 2000);

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
