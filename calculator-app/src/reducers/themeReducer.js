const themeState = {
  darkTheme: true,
};

const CHANGE_THEME = 'CHANGE_THEME';

export const themeReducer = (state = themeState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, darkTheme: !state.darkTheme };

    default:
      return state;
  }
};

export const changeThemeAction = () => ({ type: CHANGE_THEME });
