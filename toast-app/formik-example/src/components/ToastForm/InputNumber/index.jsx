import React from 'react'

import { TYPES_ELEMENT_FORM } from 'constants'

import { StyledLabel } from '../style'
import { StyledCustomInputNumber } from './style'

const InputNumber = ({ value, handleChange }) => {
  return (
    <StyledCustomInputNumber>
      <StyledLabel
        htmlFor={`input-${TYPES_ELEMENT_FORM.delay}`}>
        {TYPES_ELEMENT_FORM.delay.toUpperCase()}
      </StyledLabel>
      <input
        id={`input-${TYPES_ELEMENT_FORM.delay}`}
        name={TYPES_ELEMENT_FORM.delay}
        type="number"
        onChange={handleChange}
        value={value}
      />
    </StyledCustomInputNumber>
  )
}

export default InputNumber
