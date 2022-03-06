import React from 'react'

import { KEYPAD_BUTTONS } from 'constants'
import KeypadButton from './KeypadButton'

import styled from 'styled-components'

const KeypadContainer = styled.div`
  margin: 0 10px;
  grid-area: keypad;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  align-items: center;
  border-top: 1px solid
    ${({ theme }) => theme.colors.fourth_color};
`

const Keypad = () => {
  console.log('keypad')
  return (
    <KeypadContainer>
      {KEYPAD_BUTTONS.map((button) => {
        return (
          <KeypadButton
            buttonInfo={button}
            key={button.id}
          />
        )
      })}
    </KeypadContainer>
  )
}

export default Keypad
