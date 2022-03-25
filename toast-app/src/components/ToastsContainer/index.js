import React from 'react'
import PropTypes from 'prop-types'

import ToastPortal from '../ToastPortal'
import Toast from './Toast'

import { StyledToastContainer } from './style'

export const ToastsContainer = ({
  position,
  toastList,
}) => {
  return (
    <ToastPortal>
      <StyledToastContainer className={position}>
        {toastList.map((toastProperty, index) => (
          <Toast
            id={index}
            key={`toastProperty-${index}`}
            {...toastProperty}
          />
        ))}
      </StyledToastContainer>
    </ToastPortal>
  )
}

ToastsContainer.propTypes = {
  position: PropTypes.string,
  toastList: PropTypes.array,
}
