import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { changeThemeAction } from 'actions'

/* import { PageLayout } from './layouts'; */

const SettingPage = () => {
  const dispatch = useDispatch()
  const changeTheme = useCallback(() => {
    dispatch(changeThemeAction())
  }, [dispatch])

  return (
    <>
      <h3>Setting</h3>
      <button onClick={changeTheme}> change theme</button>
    </>
  )
}
export default SettingPage
