import { OPERATORS } from 'constants'

export const applyOperator = (operator, values) => {
  const firstValue = values[0]
  let result = null

  if (values.length === 1) {
    result = operator.calc(parseFloat(firstValue))
  } else {
    const secondValue = values[1]
    result = operator.calc(
      parseFloat(secondValue),
      parseFloat(firstValue),
    )
  }
  return result
}

export const hasPriority = (
  firstOperator,
  secondOperator,
) => {
  if (getOperator(firstOperator) !== undefined) {
    return (
      getOperatorPriority(firstOperator) <=
      getOperatorPriority(secondOperator)
    )
  }
}

export const getOperator = (operatorID) => {
  for (let i = 0; i < OPERATORS.length; i++) {
    if (OPERATORS[i].id === operatorID) {
      return OPERATORS[i]
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

function getOperatorPriority(operatorId) {
  for (let i = 0; i < OPERATORS.length; i++) {
    if (OPERATORS[i].id === operatorId) {
      return i
    }
  }
  return 1000
}
