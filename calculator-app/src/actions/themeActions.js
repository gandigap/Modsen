import {
  CHANGE_THEME,
  CHANGE_MODE_CALCULATOR,
} from 'constants'

export const changeThemeAction = (payload) => ({
  type: CHANGE_THEME,
  payload,
})

export const changeModeCalculatorAction = (payload) => ({
  type: CHANGE_MODE_CALCULATOR,
  payload,
})
