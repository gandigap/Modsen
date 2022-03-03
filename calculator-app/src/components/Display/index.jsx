import React from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components'

const DisplayContainer = styled.div`
  grid-area: display;
  font-size: ${({ theme }) => theme.fontSizes[5]};
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
