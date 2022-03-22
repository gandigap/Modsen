import React from 'react'

import CustomSelect from './CustomSelect'
import { TYPES_ELEMENT_FORM } from '../../../constants'

import { StyledCelects } from './style'

const Selects = ({
  handleChange,
  valueSize,
  valuePosition,
}) => {
  return (
    <StyledCelects>
      <CustomSelect
        type={TYPES_ELEMENT_FORM.size}
        handleChange={handleChange}
        value={valueSize}
      />
      <CustomSelect
        type={TYPES_ELEMENT_FORM.animation}
        handleChange={handleChange}
        value={valuePosition}
      />
    </StyledCelects>
  )
}

export default Selects
