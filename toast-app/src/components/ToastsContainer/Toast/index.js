import React from 'react'
import PropTypes from 'prop-types'

import { getDefaultColors, getIcons } from '@/utils'
import {
  TOAST_TYPES,
  TOAST_SIZES,
  TOAST_ANIMATIONS,
  TOAST_DEFAULT_DELAY,
} from '@/constants'
import { CloseIcon } from '../../icons'

import {
  StyledTypeIcon,
  StyledCloseIcon,
  StyledToastContainer,
  StyledToastTitle,
  StyledToastContent,
  StyledToastText,
} from './style'
import ErrorBoundary from '../../ErrorBoundary'

const Toast = ({
  id = 1,
  title,
  content,
  size,
  animationType,
  toastType = TOAST_TYPES.info,
  color,
  bgcolor,
  delay = TOAST_DEFAULT_DELAY,
  handleClick,
}) => {
  const deleteToast = () => {
    handleClick && handleClick(id)
  }

  const typeIcon = getIcons(toastType, color)

  return (
    <ErrorBoundary>
      <StyledToastContainer
        id={id}
        color={
          color === ''
            ? getDefaultColors(toastType).font
            : color
        }
        backgroundColor={
          bgcolor === ''
            ? getDefaultColors(toastType).background
            : bgcolor
        }
        animation={animationType}
        size={size}
        delay={delay}>
        <StyledTypeIcon>{typeIcon}</StyledTypeIcon>
        <StyledToastText>
          <StyledToastTitle>{title}</StyledToastTitle>
          <StyledToastContent>{content}</StyledToastContent>
        </StyledToastText>
        <StyledCloseIcon onClick={deleteToast} data-id={id}>
          <CloseIcon color={color} />
        </StyledCloseIcon>
      </StyledToastContainer>
    </ErrorBoundary>
  )
}

Toast.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  handleClick: PropTypes.func,
  animationType: PropTypes.oneOf([
    TOAST_ANIMATIONS.horizontal,
    TOAST_ANIMATIONS.vertical,
  ]),
  color: PropTypes.string,
  bgcolor: PropTypes.string,
  toastType: PropTypes.oneOf([
    TOAST_TYPES.info,
    TOAST_TYPES.warning,
    TOAST_TYPES.error,
    TOAST_TYPES.success,
  ]),
  size: PropTypes.oneOf([
    TOAST_SIZES.small,
    TOAST_SIZES.medium,
    TOAST_SIZES.big,
  ]),
  delay: PropTypes.number,
}

export default Toast
