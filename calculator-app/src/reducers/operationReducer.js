import {
  UPDATE_CALCHISTORY,
  UPDATE_TOKENLIST,
  UPDATE_DISPLAY_VALUE,
  CLEAR_TOKENLIST,
  CLEAR_CALCHISTORY,
  ADD_PERIOD,
} from 'constants'

const OperationState = {
  tokenList: [],
  displayValue: '',
  calcHistory: [],
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
    case CLEAR_TOKENLIST:
      return {
        ...state,
        tokenList: [],
      }
    case CLEAR_CALCHISTORY:
      return {
        ...state,
        calcHistory: [],
      }
    case ADD_PERIOD:
      return {
        ...state,
        tokenList: [],
      }
    default:
      return state
  }
}
