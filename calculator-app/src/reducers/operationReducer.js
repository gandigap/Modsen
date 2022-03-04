import {
  SET_0,
  SET_1,
  SET_2,
  SET_3,
  SET_4,
  SET_5,
  SET_6,
  SET_7,
  SET_8,
  SET_9,
  ADDITION,
} from 'constants'

const OperationState = {
  currentNumber: null,
  tokenList: [
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
  ],
  calcHistory: [],
}

export const operationReducer = (
  state = OperationState,
  action,
) => {
  switch (action.type) {
    case SET_0:
      return {
        ...state,
        value: state.currentNumber + 0,
      }
    case SET_1:
      return {
        ...state,
        value: state.currentNumber + 1,
      }
    case SET_2:
      return {
        ...state,
        value: state.currentNumber + 2,
      }
    case SET_3:
      return {
        ...state,
        value: state.currentNumber + 3,
      }
    case SET_4:
      return {
        ...state,
        value: state.currentNumber + 4,
      }
    case SET_5:
      return {
        ...state,
        value: state.currentNumber + 4,
      }
    case SET_6:
      return {
        ...state,
        value: state.currentNumber + 6,
      }
    case SET_7:
      return {
        ...state,
        value: state.currentNumber + 7,
      }
    case SET_8:
      return {
        ...state,
        value: state.currentNumber + 8,
      }
    case SET_9:
      return {
        ...state,
        value: state.currentNumber + 9,
      }
    case ADDITION:
      return {
        ...state,
        value: state.currentNumber + action.payload,
      }

    default:
      return state
  }
}
