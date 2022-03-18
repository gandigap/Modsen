import { useEffect } from 'react'
import PropTypes from 'prop-types'

import { getDefaultColors, getIcons, getPadding } from '../../../utils'
import { TOAST_TYPES, TOAST_SIZES, TOAST_ANIMATIONS } from '../../../constants'
import { CloseIcon } from '../../icons'

import { StypedTypeIcon, StyledCloseIcon, StyledToastContainer, StyledToastTitle } from './style'

const Toast = (props) => {
  const {
    id = '1',
    label,
    size = getPadding(TOAST_SIZES.small).padding,
    animationType = TOAST_ANIMATIONS.ease,
    toastType = TOAST_TYPES.info,
    color = getDefaultColors(toastType).font,
    bgColor = getDefaultColors(toastType).background,
    handleClick,
  } = { ...props }

  const style = () => {
    return {
      color: `${color}`,
      backgroundColor: `${bgColor}`,
      padding: `${getPadding(size).padding}`,
      /*  animation: */
    }
  }

  const typeIcon = getIcons(toastType, color)
  /* 
  useEffect(() => {
    const interval = setInterval(() => {
      document.body.removeChild(document.getElementById('root__portal'))
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, []) */

  const deleteToast = (e) => {
    e.preventDefault()
    console.log(e.currentTarget.id)
  }

  return (
    <StyledToastContainer id={id} className={'test'} style={style()}>
      <StypedTypeIcon>{typeIcon}</StypedTypeIcon>
      <StyledToastTitle onClick={handleClick}>{label}</StyledToastTitle>
      <StyledCloseIcon onClick={deleteToast}>
        <CloseIcon color={color} />
      </StyledCloseIcon>
    </StyledToastContainer>
  )
}

Toast.propTypes = {
  label: PropTypes.string,
  handleClick: PropTypes.func,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  toastType: PropTypes.oneOf([
    TOAST_TYPES.info,
    TOAST_TYPES.warning,
    TOAST_TYPES.error,
    TOAST_TYPES.success,
  ]),
  size: PropTypes.oneOf([TOAST_SIZES.small, TOAST_SIZES.medium, TOAST_SIZES.big]),
}

export default Toast
