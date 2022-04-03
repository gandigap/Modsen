import React from 'react'

import { StyledLabel } from '../../style'
import { StyledCustomColorInput } from './style'

const CustomTextInput = ({ type, value, handleChange }) => {
  return (
    <StyledCustomColorInput>
      <input
        id={`input-${type}`}
        name={type}
        type="color"
        onChange={handleChange}
        value={value}
      />
      <StyledLabel htmlFor={`input-${type}`}>
        {type.toUpperCase()}
      </StyledLabel>
    </StyledCustomColorInput>
  )
}

export default CustomTextInput
