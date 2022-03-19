import React from 'react'
import PropTypes from 'prop-types'

import ToastPortal from '../ToastPortal'
import Toast from './Toast'

import { StyledToastContainer } from './style'

const ToastsContainer = ({ position, toastList }) => {
  console.log(toastList, 'container')

  return (
    <ToastPortal>
      <StyledToastContainer className={position}>
        {toastList.map((toastProperty, index) => (
          <Toast
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

export default ToastsContainer
