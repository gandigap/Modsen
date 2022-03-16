import PropTypes from 'prop-types'
import ToastPortal from '../ToastPortal'
import { getDefaultColors, getIcons, getPadding } from '../../utils'
import { TOAST_TYPES, TOAST_SIZES } from '../../constants'

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
      position: 'absolute',
      top: '0',
      left: '0',
      color: `${color}`,
      backgroundColor: `${bgColor}`,
      padding: `${getPadding(size).padding}`,
      borderRadius: '4px',
    }
  }

  const icon = getIcons(toastType, color)
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
      <div className="toast_wrapper" style={style()}>
        <div>{icon}</div>
        <span onClick={handleClick}>{label}</span>
      </div>
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
