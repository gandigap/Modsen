import React from 'react'
import ToastPortal from '../ToastPortal'
import Toast from './Toast'

import { StyledToastContainer } from './style'

const ToastsContainer = ({ position, toastList }) => {  
  return (
    <ToastPortal>
      <StyledToastContainer className={position}>      
        {toastList.map((toastProperty,index)=><Toast key={`toastProperty-${index}`} {...toastProperty}/>)}
      </StyledToastContainer>
    </ToastPortal>
  )
}

export default ToastsContainer
