import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

const KeypadButtonContainer = styled.button`
  margin: 20px;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme.colors.secondary};
`

const KeypadButton = ({ buttonInfo }) => {
  const dispatch = useDispatch()

  const clickButton = useCallback((e) => {
    console.log(e.target)
  }, [])

  return (
    <KeypadButtonContainer
      data-action={buttonInfo.action}
      onClick={clickButton}>
      {buttonInfo.value}
    </KeypadButtonContainer>
  )
}

export default KeypadButton
