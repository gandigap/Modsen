import {
  ADD_TOKEN,
  UPDATE_TOKENLIST,
  UPDATE_DISPLAY_VALUE,
} from 'constants'

const OperationState = {
  currentNumber: null,
  currentToken: '',
  tokenList: [],
  displayValue: '',
  calcHistory: [],
  /* tokenList: [
    '6',
    'op-subtract',
    '3',
    'op-multiply',
    'bracket-left',
    '23',
    'op-subtract',
    'op-square-root',
    'bracket-left',
    '3',
    'op-multiply',
    '3',
    'bracket-right',
    'bracket-right',
  ], */
}

export const operationReducer = (
  state = OperationState,
  action,
) => {
  switch (action.type) {
    case ADD_TOKEN:
      return {
        ...state,
        tokenList: [state.tokenList, ...action.payload],
      }
    case UPDATE_TOKENLIST:
      return {
        ...state,
        tokenList: action.payload,
      }
    case UPDATE_DISPLAY_VALUE:
      return {
        ...state,
        displayValue: action.payload,
      }
    default:
      return state
  }
}
