import {
  CHANGE_THEME,
  CHANGE_MODE_CALCULATOR,
  THEME_VIEW,
  MODE_CALCULATOR,
} from 'constants/'

const themeState = {
  themeView: THEME_VIEW.dark,
  mode: MODE_CALCULATOR.classic,
}

export const themeReducer = (
  state = themeState,
  action,
) => {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, themeView: action.payload }
    case CHANGE_MODE_CALCULATOR:
      return { ...state, mode: action.payload }

    default:
      return state
  }
}
