import React from 'react'

import { StyledLabel } from '../../style'
import { StyledCustomTextInput } from './style'

const CustomTextInput = ({
  type,
  values,
  handleChange,
}) => {
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
        value={values}
      />
    </StyledCustomTextInput>
  )
}

export default CustomTextInput
