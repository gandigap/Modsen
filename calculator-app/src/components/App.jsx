import React from 'react'
import { useSelector } from 'react-redux'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import PageLayout from 'layouts'
import HomePage from 'pages/Home'
import SettingPage from 'pages/Setting'
import {
  HOME_PAGE_ROUTE,
  SETTING_PAGE_ROUTE,
  DARK_COLORS,
  LIGHT_COLORS,
  THEME_VIEW,
} from 'constants'
import { themeSelector } from 'selectors'

import theme from 'theme'
import { ThemeProvider } from 'styled-components'

const App = () => {
  const { themeView } = useSelector(themeSelector)

  return (
    <ThemeProvider
      theme={
        themeView === THEME_VIEW.dark
          ? Object.assign(theme, DARK_COLORS)
          : Object.assign(theme, LIGHT_COLORS)
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
