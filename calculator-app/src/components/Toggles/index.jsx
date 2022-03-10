import React from 'react'

import { TEXT } from 'constants'
import ColorToggle from './ColorToggle'
import DropDown from './DropDown'

import { TogglesContainer, TogglesTitle } from './style'

const Toogles = ({ type }) => {
  return (
    <TogglesContainer>
      <TogglesTitle>{`${type}:`}</TogglesTitle>
      {type === TEXT.mode ? <DropDown /> : <ColorToggle />}
    </TogglesContainer>
  )
}

export default Toogles
