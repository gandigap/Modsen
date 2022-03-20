import React from 'react'
import {
  WarningIcon,
  ErrorIcon,
  SuccessIcon,
  InfoIcon,
} from '../components/icons'
import { TOAST_TYPES } from '../constants'

export const getIcons = (type, color) => {
  switch (type) {
    case TOAST_TYPES.info:
      return <InfoIcon color={color} />
    case TOAST_TYPES.warning:
      return <WarningIcon color={color} />
    case TOAST_TYPES.error:
      return <ErrorIcon color={color} />
    default:
      return <SuccessIcon color={color} />
  }
}
