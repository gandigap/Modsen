import React from 'react'
import { useSelector } from 'react-redux'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import theme from 'theme'
import { ThemeProvider } from 'styled-components'
import PageLayout from 'layouts'
import HomePage from 'pages/Home'
import SettingPage from 'pages/Setting'
import { darkColors, lightColors } from 'constants/colors'

import {
  HOME_PAGE_ROUTE,
  SETTING_PAGE_ROUTE,
} from 'constants'

const App = () => {
  const themeState = useSelector(
    (state) => state.themeState,
  )

  return (
    <ThemeProvider
      theme={
        themeState.darkTheme
          ? Object.assign(theme, darkColors)
          : Object.assign(theme, lightColors)
      }>
      <BrowserRouter>
        <Routes>
          <Route
            path={HOME_PAGE_ROUTE}
            element={<PageLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path={SETTING_PAGE_ROUTE}
              element={<SettingPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
export default App
