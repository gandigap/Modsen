import React from 'react'

import { PAGES_TEXT } from 'constants'
import ColorToggle from './ColorToggle'
import DropDown from './DropDown'

import { TogglesContainer, TogglesTitle } from './style'

const Toogles = ({ type }) => (
  <TogglesContainer>
    <TogglesTitle>{`${type}:`}</TogglesTitle>
    {type === PAGES_TEXT.mode ? (
      <DropDown />
    ) : (
      <ColorToggle />
    )}
  </TogglesContainer>
)

export default Toogles
