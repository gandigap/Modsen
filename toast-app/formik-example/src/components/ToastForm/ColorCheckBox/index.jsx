import React from 'react'

import { StyledCheckBoxContainer } from './style'
import { StyledLabel } from '../style'

const ColorCheckBox = ({ handleChange, value }) => {
  return (
    <StyledCheckBoxContainer>
      <StyledLabel htmlFor={`checkbox`}>
        Default colors
      </StyledLabel>
      <input
        id={`checkbox`}
        className="form-check-input"
        type="checkbox"
        onChange={handleChange}
        value={value}
      />
    </StyledCheckBoxContainer>
  )
}

export default ColorCheckBox
