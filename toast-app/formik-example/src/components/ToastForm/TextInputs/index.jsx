import React from 'react'

import { TYPES_ELEMENT_FORM } from '../../../constants'
import CustomTextInput from './CustomTextInput'

import { StyledTextInputs } from './style'

const TextInputs = ({
  handleChange,
  values: [valueTitle, valueContent],
}) => {
  return (
    <StyledTextInputs>
      <CustomTextInput
        type={TYPES_ELEMENT_FORM.title}
        values={valueTitle}
        handleChange={handleChange}
      />
      <CustomTextInput
        type={TYPES_ELEMENT_FORM.content}
        values={valueContent}
        handleChange={handleChange}
      />
    </StyledTextInputs>
  )
}

export default TextInputs
