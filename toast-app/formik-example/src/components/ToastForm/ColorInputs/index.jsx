import React from 'react'

import { TYPES_ELEMENT_FORM } from '../../../constants'
import CustomColorInput from './CustomColorInput'

import { StyledColorInputs } from './style'

const TextInputs = ({
  handleChange,
  values: [valueColor, valueBgcolor],
}) => {
  return (
    <StyledColorInputs>
      <CustomColorInput
        type={TYPES_ELEMENT_FORM.color}
        values={valueColor}
        handleChange={handleChange}
      />
      <CustomColorInput
        type={TYPES_ELEMENT_FORM.bgcolor}
        values={valueBgcolor}
        handleChange={handleChange}
      />
    </StyledColorInputs>
  )
}

export default TextInputs
