import * as actions from './actions'

export const KEYPAD_BUTTONS = [
  { value: 'c', action: actions.TOTAL_RESET },
  { value: '7', action: actions.SET_7 },
  { value: '8', action: actions.SET_8 },
  { value: '9', action: actions.SET_9 },
  { value: '*', action: actions.MULTIPLY },
  { value: '-', action: actions.SUBSTRACTION },
  { value: '4', action: actions.SET_4 },
  { value: '5', action: actions.SET_5 },
  { value: '6', action: actions.SET_6 },
  { value: '+', action: actions.ADDITION },
  { value: '1', action: actions.SET_1 },
  { value: '2', action: actions.SET_2 },
  { value: '3', action: actions.SET_3 },
  { value: '=', action: actions.EQUAL },
  { value: '.', action: actions.SET_FLOAT_POINT },
  { value: '(', action: actions.SET_LEFT_BRACKET },
  { value: '0', action: actions.SET_0 },
  { value: ')', action: actions.SET_RIGHT_BRACKET },
  { value: 'CE', action: actions.RESET_LAST_NUMBER },
]
