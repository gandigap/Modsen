import React, {
  useCallback,
  useEffect,
  useState,
} from 'react'
import PropTypes from 'prop-types'

import { getDefaultColors, getIcons } from '@/utils'
import {
  TOAST_TYPES,
  TOAST_SIZES,
  TOAST_ANIMATIONS,
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

const Toast = (props) => {
  const [viewState, setViewState] = useState(true)

  const deleteToast = useCallback(() => {
    setViewState(false)
    setTimeout(() => {
      handleClick
        ? handleClick(id)
        : document.getElementById(id).remove()
    }, delay)
  })

  useEffect(() => {
    const interval = setInterval(() => {
      deleteToast()
    }, delay)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const {
    id = '1',
    title,
    content,
    size,
    animationType,
    toastType = TOAST_TYPES.info,
    color,
    bgcolor,
    delay = 1000,
    handleClick = deleteToast,
  } = { ...props }

  const typeIcon = getIcons(toastType, color)
  console.log(color, bgcolor, 'colors')
  return (
    <ErrorBoundary>
      <StyledToastContainer
        id={id}
        className={
          viewState ? 'animation-start' : 'animation-end'
        }
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
        <StyledCloseIcon onClick={handleClick} data-id={id}>
          <CloseIcon color={color} />
        </StyledCloseIcon>
      </StyledToastContainer>
    </ErrorBoundary>
  )
}

Toast.propTypes = {
  title: PropTypes.string,
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
