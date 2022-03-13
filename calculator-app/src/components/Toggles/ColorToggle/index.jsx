import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeThemeAction } from 'actions'
import { THEME_VIEW } from 'constants'
import { themeSelector } from 'selectors'

import ColorToggleContainer from './style'

const ColorToggle = () => {
  const dispatch = useDispatch()
  const { themeView } = useSelector(themeSelector)

  const changeTheme = useCallback(() => {
    dispatch(
      changeThemeAction(
        themeView === THEME_VIEW.dark
          ? THEME_VIEW.light
          : THEME_VIEW.dark,
      ),
    )
  }, [dispatch, themeView])

  return (
    <ColorToggleContainer
      type="checkbox"
      className={'toggle'}
      onClick={changeTheme}></ColorToggleContainer>
  )
}

export default ColorToggle
