import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeModeCalculatorAction } from 'actions'
import { MODE_CALCULATOR } from 'constants'
import { themeSelector } from 'selectors'

import {
  DropDownButton,
  DropDownContainer,
  DropDownButtonText,
  DropDownListItem,
  DropDownList,
} from './style'

const DropDown = () => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const { mode } = useSelector(themeSelector)

  const changeView = () => {
    setIsOpen(!isOpen)
  }

  const changeMode = (e) => {
    changeView()
    dispatch(
      changeModeCalculatorAction(e.target.textContent),
    )
  }

  return (
    <DropDownContainer>
      <DropDownButton onClick={changeView}>
        <DropDownButtonText>{mode}</DropDownButtonText>
        <DropDownButtonText>
          {isOpen ? '▲' : '▼'}
        </DropDownButtonText>
      </DropDownButton>
      <DropDownList
        className={isOpen ? '' : 'hide_select_mode'}>
        <DropDownListItem onClick={changeMode}>
          {MODE_CALCULATOR.classic}
        </DropDownListItem>
        <DropDownListItem onClick={changeMode}>
          {MODE_CALCULATOR.engineer}
        </DropDownListItem>
      </DropDownList>
    </DropDownContainer>
  )
}

export default DropDown
