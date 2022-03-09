import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { KEYPAD_BUTTONS, MODE_CALCULATOR } from 'constants'
import KeypadButton from './KeypadButton'

import styled from 'styled-components'

const KeypadContainer = styled.div`
  margin: ${({ theme }) => theme.spaces[0]}px
    ${({ theme }) => theme.spaces[2]}px;
  padding: ${({ theme }) => theme.spaces[3]}px;
  grid-area: keypad;
  display: grid;
  grid-template-columns: repeat(
    5,
    ${({ theme }) => theme.spaces[5]}px
  );
  grid-gap: ${({ theme }) => theme.spaces[2]}px;
  justify-items: center;
  justify-content: center;
  align-content: center;
  align-items: center;
  border-top: 1px solid
    ${({ theme }) => theme.colors.fourth_color};

  & button:nth-child(10) {
    grid-row: 2 / 4;
    grid-column: 5;
  }
`

const Keypad = () => {
  const { mode } = useSelector((state) => state.themeState)
  const [modeKeypad, setModeKeypad] = useState(mode)

  useEffect(() => {
    setModeKeypad(mode)
  }, [mode])

  return (
    <KeypadContainer>
      {KEYPAD_BUTTONS.map((button, index) => {
        if (modeKeypad === MODE_CALCULATOR.classic) {
          return index < 19 ? (
            <KeypadButton
              buttonInfo={button}
              key={button.id}
            />
          ) : null
        } else {
          return (
            <KeypadButton
              buttonInfo={button}
              key={button.id}
            />
          )
        }
      })}
    </KeypadContainer>
  )
}

export default Keypad
