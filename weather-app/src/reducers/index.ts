import { combineReducers } from 'redux'

import todoReducer from './customReducer'

const store = {
  todos: todoReducer,
}

export default combineReducers(store)
