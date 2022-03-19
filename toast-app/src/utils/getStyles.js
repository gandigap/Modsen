import { TOAST_TYPES, TOAST_SIZES } from '../constants'

export const getDefaultColors = (type) => {
  switch (type) {
    case TOAST_TYPES.info:
      return { font: '#fff', background: '#9A40D3' }
    case TOAST_TYPES.warning:
      return { font: '#fff', background: '#E25837' }
    case TOAST_TYPES.error:
      return { font: '#000', background: '#F4E048' }
    default:
      return { font: '#000', background: '#37E29A' }
  }
}

export const getPadding = (size) => {
  switch (size) {
    case TOAST_SIZES.small:
      return { padding: '5px 10px' }
    case TOAST_SIZES.medium:
      return { padding: '10px 15px' }
    default:
      return { padding: '15px 20px' }
  }
}
