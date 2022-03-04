import React from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components'

const DisplayContainer = styled.div`
  grid-area: display;
  padding: 20px;
  text-align: right;
  font-size: ${({ theme }) => theme.fontSizes[5]}px;
  color: ${({ theme }) => theme.colors.fourth_color};
`

const Display = () => {
  const operationState = useSelector(
    (state) => state.operationState,
  )

  return (
    <DisplayContainer>
      {operationState.currentNumber}
    </DisplayContainer>
  )
}

export default Display
