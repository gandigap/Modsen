import React from 'react'

import { StyledLabel } from '../../style'
import { StyledCustomColorInput } from './style'

const CustomTextInput = ({ type, value, handleChange }) => {
  return (
    <StyledCustomColorInput>
      <StyledLabel htmlFor={`input-${type}`}>
        {type.toUpperCase()}
      </StyledLabel>
      <input
        id={`input-${type}`}
        name={type}
        type="color"
        onChange={handleChange}
        values={value}
      />
    </StyledCustomColorInput>
  )
}

export default CustomTextInput
