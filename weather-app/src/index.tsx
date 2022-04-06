import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'
import { store } from './store'

import './globalStyle.css'

const rootContainer = document.getElementById('root')
if (!rootContainer) throw new Error('Failed to find the root element')
const root = createRoot(rootContainer)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
