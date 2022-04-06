import { combineReducers } from 'redux'

import weatherReducer from './weatherReducer'

const store = {
  customState: weatherReducer,
}

export default combineReducers(store)
