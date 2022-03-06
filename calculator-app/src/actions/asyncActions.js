import {
  updateDisplayValueAction,
  updateTokenListAction,
} from './operatorActions'
import {
  getOperator,
  output,
  applyOperator,
  hasPriority,
} from 'utils'

export const calculate = () => (dispatch, getState) => {
  let { tokenList, displayValue } =
    getState().operationState

  let count = 0
  for (let i = 0; i < tokenList.length; i++) {
    if (tokenList[i] === 'bracket-left') {
      count++
    } else if (tokenList[i] === 'bracket-right') {
      count--
    }
  }
  if (count != 0) {
    output('Error: unbalanced brackets')
    return
  }

  let valStack = []
  let opStack = []

  for (let i = 0; i < tokenList.length; i++) {
    if (!isNaN(tokenList[i])) {
      valStack.push(tokenList[i])
    } else if (tokenList[i] === 'num-pi') {
      valStack.push(Math.PI)
    } else if (tokenList[i] === 'bracket-left') {
      opStack.push(tokenList[i])
    } else if (tokenList[i] === 'bracket-right') {
      while (
        opStack[opStack.length - 1] !== 'bracket-left'
      ) {
        let operator = getOperator(opStack.pop())
        if (operator.numOperands === 1)
          valStack.push(
            applyOperator(operator, [valStack.pop()]),
          )
        else
          valStack.push(
            applyOperator(operator, [
              valStack.pop(),
              valStack.pop(),
            ]),
          )
      }
      opStack.pop()
    } else {
      while (
        opStack.length > 0 &&
        hasPriority(
          opStack[opStack.length - 1],
          tokenList[i],
        )
      ) {
        let operator = getOperator(opStack.pop())
        if (operator.numOperands === 1)
          valStack.push(
            applyOperator(operator, [valStack.pop()]),
          )
        else
          valStack.push(
            applyOperator(operator, [
              valStack.pop(),
              valStack.pop(),
            ]),
          )
      }
      opStack.push(tokenList[i])
    }
  }

  while (opStack.length > 0) {
    let operator = getOperator(opStack.pop())
    if (operator.numOperands === 1)
      valStack.push(
        applyOperator(operator, [valStack.pop()]),
      )
    else
      valStack.push(
        applyOperator(operator, [
          valStack.pop(),
          valStack.pop(),
        ]),
      )
  }

  output(valStack[0], displayValue, tokenList)
}

export const addToken = (token) => (dispatch, getState) => {
  let { tokenList } = getState().operationState
  if (isNaN(token)) {
    if (
      (token === 'bracket-left' || token === 'num-pi') &&
      !isNaN(tokenList[tokenList.length - 1])
    ) {
      tokenList.push('op-multiply')
    }
    tokenList.push(token)
  } else {
    if (!isNaN(tokenList[tokenList.length - 1])) {
      tokenList[tokenList.length - 1] =
        tokenList[tokenList.length - 1] + token
    } else {
      if (
        !isNaN(token) &&
        (tokenList[tokenList.length - 1] ===
          'bracket-right' ||
          tokenList[tokenList.length - 1] === 'num-pi')
      ) {
        tokenList.push('op-multiply')
      }
      tokenList.push(token)
    }
  }
  console.log(tokenList, 'tokenList')
  dispatch(updateTokenListAction(tokenList))
  dispatch(displayEquation())
}

export const displayEquation =
  () => (dispatch, getState) => {
    let { tokenList } = getState().operationState

    let htmlString = ''
    for (let index = 0; index < tokenList.length; index++) {
      if (isNaN(tokenList[index])) {
        if (tokenList[index] === 'bracket-left') {
          htmlString += ' ('
        } else if (tokenList[index] === 'bracket-right') {
          htmlString += ') '
        } else if (tokenList[index] === 'num-pi') {
          htmlString += ' π '
        } else {
          htmlString += getOperator(tokenList[index]).symbol
        }
      } else {
        htmlString += tokenList[index]
      }
    }
    console.log(htmlString, 'htmlstring')
    dispatch(updateDisplayValueAction(htmlString))
  }

export const deleteLast = () => (dispatch, getState) => {
  let { tokenList } = getState().operationState

  if (isNaN(tokenList[tokenList.length - 1])) {
    tokenList.pop()
  } else {
    tokenList[tokenList.length - 1] = tokenList[
      tokenList.length - 1
    ].slice(0, -1)
    if (tokenList[tokenList.length - 1].length === 0) {
      tokenList.pop()
    }
  }
  dispatch(updateTokenListAction(tokenList))
  dispatch(displayEquation())
}
