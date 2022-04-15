import React from 'react';

import { useTypedSelector } from 'hooks';
import Clock from './Clock';
import CityInput from './CityInput';

import { StyledDateAndLocation } from './styles';

const DateAndLocation = () => {
  const { locationStateError, locationLoading } = useTypedSelector(
    (state) => state.locationState,
  );

  return (
    <StyledDateAndLocation>
      <Clock />
      {!locationStateError && !locationLoading && <CityInput />}
    </StyledDateAndLocation>
  );
};

export default DateAndLocation;
