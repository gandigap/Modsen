import React from 'react'
import PropTypes from 'prop-types'

import ToastPortal from '../ToastPortal'
import Toast from './Toast'

import { StyledToastContainer } from './style'

export const ToastsContainer = ({
  position,
  toastList,
  handleRemoveToast,
}) => {
  return (
    <ToastPortal>
      <StyledToastContainer className={position}>
        {toastList.map((toastProperty, index) => (
          <Toast
            key={`toastProperty-${index}`}
            id={index}
            {...toastProperty}
            handleClick={handleRemoveToast}
          />
        ))}
      </StyledToastContainer>
    </ToastPortal>
  )
}

ToastsContainer.propTypes = {
  position: PropTypes.string,
  toastList: PropTypes.array,
  handleRemoveToast: PropTypes.func,
}
