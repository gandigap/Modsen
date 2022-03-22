import React from 'react'

import { TOAST_TYPES } from '../../../constants'

import {
  StyledRadioContainer,
  StyledRadioContent,
  StyledRadioTitle,
} from './style'

const RadioContainer = ({ handleChange }) => {
  return (
    <StyledRadioContainer>
      <StyledRadioTitle>TYPES</StyledRadioTitle>
      <StyledRadioContent>
        {Object.keys(TOAST_TYPES).map((type) => (
          <div key={`radio-${type}`}>
            <input
              type="radio"
              value={type}
              name="type"
              onChange={handleChange}
            />
            <label>{type}</label>
          </div>
        ))}
      </StyledRadioContent>
    </StyledRadioContainer>
  )
}

export default RadioContainer
