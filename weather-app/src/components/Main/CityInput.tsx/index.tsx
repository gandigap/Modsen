/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector, useDebounce } from 'hooks';

import {
  fetchWeatherActionCreator,
  updateLocationNameActionCreator,
} from 'actions';

import { StyledCityInput } from './styles';

/* const valueLocationName = () => {
  const data = localStorage.getItem('location');

  return JSON.parse(data?.slice(1, data.length - 1) || '');
}; */
const CityInput: React.FC = () => {
  const { location, countryCode } = useTypedSelector(
    (state) => state.locationState,
  );

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

  return (
    <div>
      <StyledCityInput
        type="text"
        value={locationName}
        onChange={handleChangeInputValue}
      />
      {countryCode && <p>{countryCode}</p>}
    </div>
  );
};

export default CityInput;
