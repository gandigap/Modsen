import React from 'react'

import KeypadButtonContainer from './style'

const KeypadButton = ({ buttonInfo, handle }) => {
  return (
    <KeypadButtonContainer
      id={buttonInfo.id}
      className={buttonInfo.class}
      onClick={handle}>
      {buttonInfo.valueButton}
    </KeypadButtonContainer>
  )
}

export default KeypadButton
