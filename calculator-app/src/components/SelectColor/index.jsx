import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeThemeAction } from 'actions'
import { THEME_VIEW } from 'constants'

import styled from 'styled-components'

const SelectColorContainer = styled.div`
  display: flex;
`

const Title = styled.h4`
  margin: ${({ theme }) => theme.spaces[2]}px;
  color: ${({ theme }) => theme.colors.fifth_color};
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
`

const SelectColor = () => {
  const { themeView } = useSelector(
    (state) => state.themeState,
  )
  const dispatch = useDispatch()
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
    <SelectColorContainer>
      <Title>Theme: </Title>
      <button onClick={changeTheme}>{themeView}</button>
    </SelectColorContainer>
  )
}

export default SelectColor
