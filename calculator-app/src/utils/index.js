import { KEYPAD_BUTTONS } from 'constants'

export const applyOperator = (operator, vals) => {
  let valA = vals[0]
  let result

  if (vals.length === 1) {
    result = operator.calc(parseFloat(valA))
  } else {
    let valB = vals[1]
    result = operator.calc(
      parseFloat(valB),
      parseFloat(valA),
    )
  }

  return result
}

export const hasPriority = (op1, op2) => {
  if (getOperator(op1) !== undefined) {
    return (
      getOperatorPriority(op1) <= getOperatorPriority(op2)
    )
  }
}

export const getOperator = (opID) => {
  for (var i = 0; i < KEYPAD_BUTTONS.length; i++) {
    if (KEYPAD_BUTTONS[i].id === opID) {
      return KEYPAD_BUTTONS[i]
    }
  }
  return undefined
}

export const toDegrees = (radians) => {
  return radians * (180 / Math.PI)
}

export const toRadians = (degrees) => {
  return degrees * (Math.PI / 180)
}

function getOperatorPriority(opID) {
  for (let i = 0; i < KEYPAD_BUTTONS.length; i++) {
    if (KEYPAD_BUTTONS[i].id === opID) {
      return i
    }
  }
  return 1000
}
