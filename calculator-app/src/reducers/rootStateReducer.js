import { combineReducers } from 'redux';
import { calculateReducer } from './calculateReducer';

export const rootReducer = combineReducers({
  dataCalculator: calculateReducer,
});
