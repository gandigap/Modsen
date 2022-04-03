import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from 'store'
import Navigation from './'
import theme from 'theme'
import { ThemeProvider } from 'styled-components'
import { DARK_COLORS } from 'constants/'
import { BrowserRouter } from 'react-router-dom'

it('render Navigation without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider
        theme={Object.assign(theme, DARK_COLORS)}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>,
    div,
  )
})
