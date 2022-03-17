import PropTypes from 'prop-types'
import { getDefaultColors, getIcons, getPadding } from '../../utils'
import { TOAST_TYPES, TOAST_SIZES } from '../../constants'
import { CloseIcon } from '../icons'
import ToastPortal from '../ToastPortal'
import { ToastContainer, TypeIconContainer, CloseIconContainer } from './style'
import { useEffect } from 'react'

const Toast = (props) => {
  const {
    label,
    size = getPadding(TOAST_SIZES.small).padding,
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
      borderRadius: '4px',
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

  return (
    <ToastPortal>
      <ToastContainer>
        <div className="toast_wrapper" style={style()}>
          <TypeIconContainer>{typeIcon}</TypeIconContainer>
          <span onClick={handleClick}>{label}</span>
          <CloseIconContainer>
            <CloseIcon color={color} />
          </CloseIconContainer>
        </div>
      </ToastContainer>
    </ToastPortal>
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
