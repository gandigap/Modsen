import React from 'react';

import { useTypedSelector } from 'hooks';
import { locationStateSelector } from 'selectors';
import { Spinner } from 'components/Spinner';
import { ErrorComponent } from 'components/ErrorComponent';

import Clock from './Clock';
import CityInput from './CityInput';
import { StyledDateAndLocation } from './styles';

const DateAndLocation: React.FC = () => {
  const { locationStateError, locationLoading } = useTypedSelector(
    locationStateSelector,
  );

  if (locationLoading) return <Spinner />;
  if (locationStateError)
    return <ErrorComponent errorMessage={locationStateError} />;
  return (
    <StyledDateAndLocation>
      <Clock />
      <CityInput />
    </StyledDateAndLocation>
  );
};

export default DateAndLocation;
