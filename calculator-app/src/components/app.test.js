import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '../store'
import App from './App'
import GlobalStyles from '../globalStyles'

it('render App without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <App />
      <GlobalStyles />
    </Provider>,
    div,
  )
})
