import React from 'react'

import { KEYPAD_BUTTONS } from 'constants'
import KeypadButton from './KeypadButton'

import styled from 'styled-components'

const KeypadContainer = styled.div`
  margin: 0 10px;
  grid-area: keypad;
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
  justify-content: space-around;
  border-top: 1px solid
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
