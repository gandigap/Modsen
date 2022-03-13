import React from 'react'
import { useSelector } from 'react-redux'

import { operationSelector } from 'selectors'

import DisplayContainer from './style'

const Display = () => {
  const { displayValue } = useSelector(operationSelector)

  return <DisplayContainer>{displayValue}</DisplayContainer>
}

export default Display
