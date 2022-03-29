import {
  TYPES_ELEMENT_FORM,
  TOAST_ANIMATIONS,
  TOAST_SIZES,
  TOAST_POSITIONS,
} from '../../../../constants'
import React from 'react'
import { StyledCustomSelect } from './style'
import { StyledLabel } from '../../style'

const CustomSelect = ({ type, value, handleChange }) => {
  const getOptions = (type) => {
    let properties = null
    switch (type) {
      case TYPES_ELEMENT_FORM.animation:
        properties = TOAST_ANIMATIONS
        break
      case TYPES_ELEMENT_FORM.size:
        properties = TOAST_SIZES
        break
      default:
        properties = TOAST_POSITIONS
        break
    }
    return (
      <>
        {Object.keys(properties)?.map((key) => (
          <option key={`option-${key}`} value={key}>
            {key}
          </option>
        ))}
      </>
    )
  }
  return (
    <StyledCustomSelect>
      <StyledLabel htmlFor={type}>
        {type.toUpperCase()}
      </StyledLabel>
      <select
        id={type}
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
        value={value}
        onChange={handleChange}>
        {getOptions(type)}
      </select>
    </StyledCustomSelect>
  )
}

export default CustomSelect
