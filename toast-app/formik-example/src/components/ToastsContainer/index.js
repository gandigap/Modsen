import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import ToastPortal from '../ToastPortal'
import { toastService } from 'ToastService'

import { StyledToastContainer } from './style'
import { useToastContainer } from 'hooks'

export const ToastsContainer = ({ delay }) => {
  const render = useToastContainer()
  console.log('toast container')
  return (
    <ToastPortal>
      <StyledToastContainer>
        {render((toast, id) => {
          console.log('list')
          return (
            <div
              key={id}
              onCLick={toastService.removeToast(id)}>
              {JSON.stringify(toast)}
            </div>
          )
        })}
      </StyledToastContainer>
    </ToastPortal>
  )
}

ToastsContainer.propTypes = {
  position: PropTypes.string,
  toastList: PropTypes.array,
  handleClick: PropTypes.func,
  delay: PropTypes.number,
}
