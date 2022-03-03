import React from 'react'
import styled from 'styled-components'
import { KEYPAD_BUTTONS } from 'constants'
import KeypadButton from './KeypadButton'

const KeypadContainer = styled.div`
  grid-area: keypad;
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  border-left: 1px solid
    ${({ theme }) => theme.colors.fourth_color};
`

const Keypad = () => {
  return (
    <KeypadContainer>
      {KEYPAD_BUTTONS.map((button) => {
        return (
          <KeypadButton
            buttonInfo={button}
            key={button.value}
          />
        )
      })}
    </KeypadContainer>
  )
}

export default Keypad
