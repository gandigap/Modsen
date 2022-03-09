import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeModeCalculatorAction } from 'actions'
import { MODE_CALCULATOR } from 'constants'

import styled from 'styled-components'

const SelectModeContainer = styled.div`
  display: flex;
`
const Title = styled.h4`
  margin: ${({ theme }) => theme.spaces[2]}px;
  color: ${({ theme }) => theme.colors.fifth_color};
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
`
const DropDownContainer = styled.div`
  &.hide_select_mode {
    display: none;
  }
`

const SelectMode = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { mode } = useSelector((state) => state.themeState)
  const dispatch = useDispatch()

  const changeView = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const changeMode = useCallback(
    (e) => {
      changeView()
      dispatch(
        changeModeCalculatorAction(e.target.textContent),
      )
    },
    [changeView, dispatch],
  )

  return (
    <SelectModeContainer>
      <Title>Mode: </Title>
      <div>
        <button onClick={changeView}>{mode}</button>
        <DropDownContainer
          className={isOpen ? '' : 'hide_select_mode'}>
          <button onClick={changeMode}>
            {MODE_CALCULATOR.classic}
          </button>
          <button onClick={changeMode}>
            {MODE_CALCULATOR.engineer}
          </button>
        </DropDownContainer>
      </div>
    </SelectModeContainer>
  )
}

export default SelectMode
