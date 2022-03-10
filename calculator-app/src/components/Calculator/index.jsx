import React from 'react'

import CalculatorContainer from './style'

const Calculator = (props) => {
  return (
    <CalculatorContainer>
      {props.children}
    </CalculatorContainer>
  )
}

export default Calculator
