import { CHANGE_THEME } from 'constants'

const themeState = {
  darkTheme: true,
}

export const themeReducer = (
  state = themeState,
  action,
) => {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, darkTheme: !state.darkTheme }

    default:
      return state
  }
}
