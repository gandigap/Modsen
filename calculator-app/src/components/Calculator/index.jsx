import React from 'react';
import styled from 'styled-components';

const CalculatorContainer = styled.div`
  backgrond-color: #cccccc;
`;

const Calculator = (props) => {
  return <CalculatorContainer>{props.children}</CalculatorContainer>;
};

export default Calculator;
