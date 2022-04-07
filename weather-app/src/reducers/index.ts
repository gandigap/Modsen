import { combineReducers } from 'redux'

import locationReducer from './locationReducer'
import weatherReducer from './weatherReducer'

const store = {
  weatherState: weatherReducer,
  locatonState: locationReducer,
}

export default combineReducers(store)
