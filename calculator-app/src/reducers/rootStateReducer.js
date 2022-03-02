import { combineReducers } from 'redux'
import { operationReducer } from './operationReducer'
import { themeReducer } from './themeReducer'

export const rootReducer = combineReducers({
  operationState: operationReducer,
  themeState: themeReducer,
})
