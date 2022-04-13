/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector, useDebounce } from 'hooks';

import { fetchWeatherActionCreator, updateLocationNameActionCreator } from 'actions';
import { StyledCityInput } from './styles';

const CityInput: React.FC = () => {
  const { location } = useTypedSelector((state) => state.locationState);
  const [locationName, setLocationName] = useState('');

  const dispatch = useDispatch();

  const updateLocationName = (value: string) => {
    dispatch(updateLocationNameActionCreator(value));
    dispatch(fetchWeatherActionCreator());
  };

  const debounceHandleChangeInputValue = useDebounce(updateLocationName, 2000);

  const handleChangeInputValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocationName(e.target.value);
      debounceHandleChangeInputValue(e.target.value);
    },
    [debounceHandleChangeInputValue],
  );

  useEffect(() => {
    location && setLocationName(location);
  }, [location]);

  return <StyledCityInput type="text" value={locationName} onChange={handleChangeInputValue} />;
};

export default CityInput;
