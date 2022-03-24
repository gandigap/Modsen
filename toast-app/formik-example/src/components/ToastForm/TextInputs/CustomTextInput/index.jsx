import React from 'react'

import { StyledLabel } from '../../style'
import { StyledCustomTextInput } from './style'

const CustomTextInput = ({ type, value, handleChange }) => {
  return (
    <StyledCustomTextInput>
      <StyledLabel htmlFor={`input-${type}`}>
        {type.toUpperCase()}
      </StyledLabel>
      <input
        id={`input-${type}`}
        name={type}
        type="text"
        onChange={handleChange}
        values={value}
      />
    </StyledCustomTextInput>
  )
}

export default CustomTextInput
