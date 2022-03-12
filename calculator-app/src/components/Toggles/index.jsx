import React from 'react'

import { PAGE_TEXT } from 'constants'
import ColorToggle from './ColorToggle'
import DropDown from './DropDown'

import { TogglesContainer, TogglesTitle } from './style'

const Toogles = ({ type }) => (
  <TogglesContainer>
    <TogglesTitle>{`${type}:`}</TogglesTitle>
    {type === PAGE_TEXT.mode ? (
      <DropDown />
    ) : (
      <ColorToggle />
    )}
  </TogglesContainer>
)

export default Toogles
