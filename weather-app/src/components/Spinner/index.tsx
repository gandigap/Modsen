import React from 'react';
import { ReactComponent as ReactLogo } from 'images/loader.svg';
import { StyledSpinner } from './styles';

export const Spinner: React.FC = () => {
  return (
    <StyledSpinner>
      <ReactLogo />
    </StyledSpinner>
  );
};
