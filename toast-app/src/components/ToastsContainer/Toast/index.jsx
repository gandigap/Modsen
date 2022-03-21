import React from 'react'
import PropTypes from 'prop-types'

import {
  getDefaultColors,
  getIcons,
  getPadding,
} from '../../../utils'
import {
  TOAST_TYPES,
  TOAST_SIZES,
  TOAST_ANIMATIONS,
} from '../../../constants'
import { CloseIcon } from '../../icons'

import {
  StypedTypeIcon,
  StyledCloseIcon,
  StyledToastContainer,
  StyledToastTitle,
} from './style'
import ErrorBoundary from '../../ErrorBoundary'

const Toast = (props) => {
  const {
    id = '1',
    label,
    size = getPadding(TOAST_SIZES.small).padding,
    animationType = TOAST_ANIMATIONS.horizontal,
    toastType = TOAST_TYPES.info,
    color = getDefaultColors(toastType).font,
    bgColor = getDefaultColors(toastType).background,
    handleClick,
  } = { ...props }  

  const typeIcon = getIcons(toastType, color)  

  return (
    <ErrorBoundary>
      <StyledToastContainer
        id={id}
        className={'test'}        
        color={color}
        backgroundColor={bgColor}
        animation={animationType}
        size={size}>
        <StypedTypeIcon>{typeIcon}</StypedTypeIcon>
        <StyledToastTitle >
          {label}
        </StyledToastTitle>
        <StyledCloseIcon onClick={handleClick(id)} data-id={id}>
          <CloseIcon color={color} />
        </StyledCloseIcon>
      </StyledToastContainer>
    </ErrorBoundary>
  )
}

Toast.propTypes = {
  label: PropTypes.string,
  handleClick: PropTypes.func,
  animationType: PropTypes.oneOf([
    TOAST_ANIMATIONS.horizontal,
    TOAST_ANIMATIONS.vertical,
  ]),
  color: PropTypes.string,
  bgColor: PropTypes.string,
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
}

export default Toast
