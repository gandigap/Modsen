import React from 'react'

import CustomSelect from './CustomSelect'
import { TYPES_ELEMENT_FORM } from '../../../constants'

import { StyledSelects } from './style'

const Selects = ({ handleChange, values }) => {
  const [valueSize, valueAnimation, valuePosition] = [
    ...values,
  ]
  console.log(
    valueSize,
    valueAnimation,
    valuePosition,
    'example',
  )
  const getSelects = () => {
    return Object.keys(TYPES_ELEMENT_FORM)
      .filter(
        (key) =>
          key === TYPES_ELEMENT_FORM.size ||
          key === TYPES_ELEMENT_FORM.animation ||
          key === TYPES_ELEMENT_FORM.position,
      )
      .map((type) => {
        let value = null
        switch (type) {
          case TYPES_ELEMENT_FORM.animation:
            value = valueAnimation
            break
          case TYPES_ELEMENT_FORM.size:
            value = valueSize
            break
          default:
            value = valuePosition
            break
        }
        return (
          <CustomSelect
            key={`custom_select-${type}`}
            type={type}
            handleChange={handleChange}
            value={value}
          />
        )
      })
  }
  return (
    <StyledSelects>
      {getSelects()}
      {/* <CustomSelect
        type={TYPES_ELEMENT_FORM.size}
        handleChange={handleChange}
        value={valueSize}
      />
      <CustomSelect
        type={TYPES_ELEMENT_FORM.animation}
        handleChange={handleChange}
        value={valueAnimation}
      /> */}
    </StyledSelects>
  )
}

export default Selects
