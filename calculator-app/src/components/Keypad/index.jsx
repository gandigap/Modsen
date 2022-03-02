import React from 'react'
import styled from 'styled-components'
import { KEYPAD_BUTTONS } from 'constants'
import KeypadButton from './KeypadButton'

const KeypadContainer = styled.div`
  display: flex;
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
