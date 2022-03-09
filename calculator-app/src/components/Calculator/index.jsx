import React from 'react'

import styled from 'styled-components'

const CalculatorContainer = styled.div`
  height: 100%;
  background-color: ${({ theme }) =>
    theme.colors.second_color};
`

const Calculator = (props) => {
  return (
    <CalculatorContainer>
      {props.children}
    </CalculatorContainer>
  )
}

export default Calculator
