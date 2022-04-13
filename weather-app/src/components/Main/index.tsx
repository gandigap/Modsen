import React from 'react';

import { useTypedSelector } from 'hooks';
import CityInput from './CityInput.tsx';

import { StyledMain } from './styles';

const Main: React.FC = () => {
  const { locationStateError, locationLoading } = useTypedSelector((state) => state.locationState);

  return <StyledMain>{!locationStateError && !locationLoading && <CityInput />}</StyledMain>;
};

export default Main;
