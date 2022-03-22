import React from 'react'
import { TYPES_ELEMENT_FORM } from '../../../constants'
import { StyledLabel } from '../style'

const InputTitle = ({ value, handleChange }) => {
  return (
    <div>
      <StyledLabel
        htmlFor={`input-${TYPES_ELEMENT_FORM.title}`}>
        {TYPES_ELEMENT_FORM.title.toUpperCase()}
      </StyledLabel>
      <input
        id={`input-${TYPES_ELEMENT_FORM.title}`}
        name={TYPES_ELEMENT_FORM.title}
        type="text"
        onChange={handleChange}
        value={value}
      />
    </div>
  )
}

export default InputTitle
