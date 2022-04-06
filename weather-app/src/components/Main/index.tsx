import React from 'react'
import { useDispatch } from 'react-redux'

import { StyledMain } from './styles'

const Main = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch({ type: 'CLICK' })
  }
  return (
    <StyledMain>
      Main
      <button onClick={handleClick}>Get Weather</button>
    </StyledMain>
  )
}

export default Main
