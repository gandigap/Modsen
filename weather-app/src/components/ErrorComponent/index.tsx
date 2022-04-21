import React from 'react';

import { StyledError } from './styles';

interface ErrorComponentProps {
  errorMessage: string;
}

export const ErrorComponent: React.FC<ErrorComponentProps> = ({
  errorMessage,
}) => <StyledError className="errorContainer">{errorMessage}</StyledError>;
