import React from 'react'
import ToastPortal from '../ToastPortal'
import Toast from './Toast'

import { StyledToastContainer } from './style'

const ToastsContainer = ({ position, toastList }) => {
  console.log(position, toastList)
  return (
    <ToastPortal>
      <StyledToastContainer className={position}>
        <Toast />
        <Toast />
        <Toast />
      </StyledToastContainer>
    </ToastPortal>
  )
}

export default ToastsContainer
