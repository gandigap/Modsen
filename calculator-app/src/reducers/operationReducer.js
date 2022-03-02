import * as actions from 'constants/actions'

const OperationState = {
  currentNumber: 'currentNumber',
  prevNumber: 'prevNumber',
}

export const operationReducer = (
  state = OperationState,
  action,
) => {
  switch (action.type) {
    case actions.SET_0:
      return {
        ...state,
        value: state.currentNumber + 0,
      }
    case actions.SET_1:
      return {
        ...state,
        value: state.currentNumber + 1,
      }
    case actions.SET_2:
      return {
        ...state,
        value: state.currentNumber + 2,
      }
    case actions.SET_3:
      return {
        ...state,
        value: state.currentNumber + 3,
      }
    case actions.SET_4:
      return {
        ...state,
        value: state.currentNumber + 4,
      }
    case actions.SET_5:
      return {
        ...state,
        value: state.currentNumber + 4,
      }
    case actions.SET_6:
      return {
        ...state,
        value: state.currentNumber + 6,
      }
    case actions.SET_7:
      return {
        ...state,
        value: state.currentNumber + 7,
      }
    case actions.SET_8:
      return {
        ...state,
        value: state.currentNumber + 8,
      }
    case actions.SET_9:
      return {
        ...state,
        value: state.currentNumber + 9,
      }
    case actions.ADDITION:
      return {
        ...state,
        value: state.currentNumber + action.payload,
      }

    default:
      return state
  }
}

export const set_0_Action = (payload) => ({
  type: actions.SET_0,
  payload,
})
