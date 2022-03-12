import React from 'react'

import CalculatorContainer from './style'

const Calculator = ({ children }) => {
  return (
    <CalculatorContainer>{children}</CalculatorContainer>
  )
}

export default Calculator
