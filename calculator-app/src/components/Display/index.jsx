import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { operationSelector } from 'selectors'

import DisplayContainer from './style'

const Display = () => {
  const [displayString, setDisplayString] = useState('')
  const { displayValue } = useSelector(operationSelector)

  useEffect(() => {
    setDisplayString(displayValue)
  }, [displayValue])

  return (
    <DisplayContainer>{displayString}</DisplayContainer>
  )
}

export default Display
