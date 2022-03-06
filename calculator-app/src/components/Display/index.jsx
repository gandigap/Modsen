import React, { useState, useEffect } from 'react'
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
  const [displayString, setdisplayString] = useState('')
  const { displayValue } = useSelector(
    (state) => state.operationState,
  )

  useEffect(() => {
    setdisplayString(displayValue)
  }, [displayValue])

  return (
    <DisplayContainer>{displayString}</DisplayContainer>
  )
}

export default Display
