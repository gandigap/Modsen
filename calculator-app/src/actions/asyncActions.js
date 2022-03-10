import {
  updateDisplayValueAction,
  updateTokenListAction,
  updateCalcHistoryAction,
} from './operatorActions'
import {
  getOperator,
  applyOperator,
  hasPriority,
} from 'utils'
import { OPERATORS_ID, TEXT } from 'constants'

export const calculateAction =
  () => (dispatch, getState) => {
    const {
      operationState: { tokenList, displayValue },
    } = getState()
    let count = 0

    for (let index = 0; index < tokenList.length; index++) {
      if (tokenList[index] === OPERATORS_ID.bracket_left) {
        count++
      } else if (
        tokenList[index] === OPERATORS_ID.bracket_right
      ) {
        count--
      }
    }

    if (count !== 0) {
      dispatch(outputAction(NaN, displayValue, tokenList))
      return
    }

    let valuesStack = []
    let operatorsStack = []
    for (let i = 0; i < tokenList.length; i++) {
      if (!isNaN(tokenList[i])) {
        valuesStack.push(tokenList[i])
      } else if (tokenList[i] === OPERATORS_ID.num_pi) {
        valuesStack.push(Math.PI)
      } else if (
        tokenList[i] === OPERATORS_ID.bracket_left
      ) {
        operatorsStack.push(tokenList[i])
      } else if (
        tokenList[i] === OPERATORS_ID.bracket_right
      ) {
        while (
          operatorsStack[operatorsStack.length - 1] !==
          OPERATORS_ID.bracket_left
        ) {
          let operator = getOperator(operatorsStack.pop())

          if (operator.numOperands === 1)
            valuesStack.push(
              applyOperator(operator, [valuesStack.pop()]),
            )
          else
            valuesStack.push(
              applyOperator(operator, [
                valuesStack.pop(),
                valuesStack.pop(),
              ]),
            )
        }

        operatorsStack.pop()
      } else {
        while (
          operatorsStack.length > 0 &&
          hasPriority(
            operatorsStack[operatorsStack.length - 1],
            tokenList[i],
          )
        ) {
          let operator = getOperator(operatorsStack.pop())
          if (operator.numOperands === 1)
            valuesStack.push(
              applyOperator(operator, [valuesStack.pop()]),
            )
          else
            valuesStack.push(
              applyOperator(operator, [
                valuesStack.pop(),
                valuesStack.pop(),
              ]),
            )
        }
        operatorsStack.push(tokenList[i])
      }
    }
    while (operatorsStack.length > 0) {
      let operator = getOperator(operatorsStack.pop())
      if (operator.numOperands === 1)
        valuesStack.push(
          applyOperator(operator, [valuesStack.pop()]),
        )
      else
        valuesStack.push(
          applyOperator(operator, [
            valuesStack.pop(),
            valuesStack.pop(),
          ]),
        )
    }
    if (
      `${valuesStack[0]}` === TEXT.positiveInfinity ||
      `${valuesStack[0]}` === TEXT.negativeInfinity
    ) {
      dispatch(
        outputAction(TEXT.nan, displayValue, tokenList),
      )
    } else {
      dispatch(
        outputAction(
          valuesStack[0],
          displayValue,
          tokenList,
        ),
      )
    }
  }

export const addTokenAction =
  (token) => (dispatch, getState) => {
    const {
      operationState: { tokenList },
    } = getState()

    if (isNaN(token)) {
      if (
        (token === OPERATORS_ID.bracket_left ||
          token === OPERATORS_ID.num_pi ||
          token === OPERATORS_ID.op_square_root) &&
        !isNaN(tokenList[tokenList.length - 1])
      ) {
        tokenList.push(OPERATORS_ID.op_multiply)
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
            OPERATORS_ID.bracket_right ||
            tokenList[tokenList.length - 1] ===
              OPERATORS_ID.num_pi)
        ) {
          tokenList.push(OPERATORS_ID.op_multiply)
        }
        tokenList.push(token)
      }
    }
    dispatch(updateTokenListAction(tokenList))
    dispatch(displayEquationAction())
  }

export const displayEquationAction =
  () => (dispatch, getState) => {
    const {
      operationState: { tokenList },
    } = getState()

    let htmlString = ''

    for (let index = 0; index < tokenList.length; index++) {
      if (isNaN(tokenList[index])) {
        if (
          tokenList[index] === OPERATORS_ID.bracket_left
        ) {
          htmlString += TEXT.bracket_left
        } else if (
          tokenList[index] === OPERATORS_ID.bracket_right
        ) {
          htmlString += TEXT.bracket_right
        } else if (
          tokenList[index] === OPERATORS_ID.num_pi
        ) {
          htmlString += TEXT.pi
        } else {
          htmlString += getOperator(tokenList[index]).symbol
        }
      } else {
        htmlString += tokenList[index]
      }
    }
    dispatch(updateDisplayValueAction(htmlString))
  }

export const deleteLastTokenAction =
  () => (dispatch, getState) => {
    const {
      operationState: { tokenList },
    } = getState()

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
    dispatch(displayEquationAction())
  }

export const outputAction =
  (out, expression, tokens) => (dispatch) => {
    const ROUND_PLACES = 15

    if (isNaN(out)) {
      out = TEXT.nan
      dispatch(updateTokenListAction([]))
    } else {
      out = +out.toFixed(ROUND_PLACES)
      dispatch(updateTokenListAction([`${out}`]))
    }
    dispatch(displayEquationAction())
    dispatch(
      updateCalcHistoryAction({
        out: out,
        expression: expression,
        tokens: tokens,
      }),
    )
  }

export const addPeriodAction =
  () => (dispatch, getState) => {
    const {
      operationState: { tokenList },
    } = getState()

    if (
      tokenList[tokenList.length - 1].indexOf(
        TEXT.point,
      ) === -1
    ) {
      tokenList[tokenList.length - 1] += TEXT.point
    }
    dispatch(updateTokenListAction(tokenList))
    dispatch(displayEquationAction())
  }
