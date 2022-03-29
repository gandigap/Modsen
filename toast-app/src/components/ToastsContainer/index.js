import React from 'react'
import PropTypes from 'prop-types'

import ToastPortal from '../ToastPortal'
import { toastService } from '@/ToastService'
import Toast from './Toast'

import { StyledToastContainer } from './style'
import { useToastContainer } from '@/hooks'
import { TOAST_POSITIONS } from '@/constants'

export const ToastsContainer = ({
  position = TOAST_POSITIONS.top_left,
}) => {
  const { toastList } = useToastContainer()

  return (
    <ToastPortal>
      <StyledToastContainer className={position}>
        {toastList?.map((toastProperty, index) => (
          <Toast
            id={index}
            key={`toastProperty-${index}`}
            handleClick={toastService.removeToast.bind(
              toastService,
            )}
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
  handleClick: PropTypes.func,
  delay: PropTypes.number,
}
