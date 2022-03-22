import {
  TYPES_ELEMENT_FORM,
  TOAST_ANIMATIONS,
  TOAST_SIZES,
} from '../../../../constants'
import React from 'react'
import { StyledCustomSelect } from './style'
import { StyledLabel } from '../../style'

const CustomSelect = ({ type, value, handleChange }) => {
  const options = (type) => {
    let properies =
      type === TYPES_ELEMENT_FORM.animation
        ? TOAST_ANIMATIONS
        : TOAST_SIZES
    return (
      <>
        {Object.keys(properies)?.map((key) => (
          <option key={`option-${key}`} value={key}>
            {key}
          </option>
        ))}
      </>
    )
  }
  return (
    <StyledCustomSelect>
      <StyledLabel htmlFor={`select-${type}`}>
        {type.toUpperCase()}
      </StyledLabel>
      <select
        id={`select-${type}`}
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
        value={value}
        onChange={handleChange}>
        {options(type)}
      </select>
    </StyledCustomSelect>
  )
}

export default CustomSelect
