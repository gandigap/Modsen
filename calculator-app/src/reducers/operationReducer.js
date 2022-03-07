import {
  UPDATE_CALCHISTORY,
  UPDATE_TOKENLIST,
  UPDATE_DISPLAY_VALUE,
} from 'constants'

const OperationState = {
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
    case UPDATE_TOKENLIST:
      return {
        ...state,
        tokenList: action.payload,
        /* tokenList: action.payload, */
      }
    case UPDATE_DISPLAY_VALUE:
      return {
        ...state,
        displayValue: action.payload,
      }
    case UPDATE_CALCHISTORY:
      return {
        ...state,
        calcHistory: [...state.calcHistory, action.payload],
      }
    default:
      return state
  }
}
