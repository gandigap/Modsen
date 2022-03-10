import React, {
  useState,
  useEffect,
  useCallback,
} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  clearCalcHistoryAction,
  clearTokenListAction,
} from 'actions'
import {
  addTokenAction,
  addPeriodAction,
  displayEquationAction,
  deleteLastTokenAction,
  calculateAction,
} from 'actions/asyncActions'
import {
  OPERATORS_ID,
  KEYPAD_BUTTONS,
  MODE_CALCULATOR,
} from 'constants'
import { operationSelector, themeSelector } from 'selectors'
import KeypadButton from './KeypadButton'

import KeypadContainer from './style'

const Keypad = () => {
  const { mode } = useSelector(themeSelector)
  const { tokenList } = useSelector(operationSelector)
  const [modeKeypad, setModeKeypad] = useState(mode)
  const dispatch = useDispatch()

  useEffect(() => {
    setModeKeypad(mode)
  }, [mode])

  const clickButton = useCallback(
    (e) => {
      switch (e.target.id) {
        case OPERATORS_ID.delete:
          dispatch(deleteLastTokenAction())
          break
        case OPERATORS_ID.clear:
          if (tokenList.length === 0) {
            dispatch(clearCalcHistoryAction())
          } else {
            dispatch(clearTokenListAction())
            dispatch(displayEquationAction())
          }
          break
        case OPERATORS_ID.period:
          if (isNaN(tokenList[tokenList.length - 1])) {
            dispatch(addTokenAction('0.'))
          } else {
            dispatch(addPeriodAction())
          }
          dispatch(displayEquationAction())
          break
        case OPERATORS_ID.equals:
          dispatch(calculateAction())
          break
        case OPERATORS_ID.num_pi:
          dispatch(addTokenAction(e.target.id))
          break
        case OPERATORS_ID.op_negate:
          if (
            !tokenList.length ||
            !tokenList[tokenList.length - 1].match(/[\d]/g)
          )
            dispatch(addTokenAction(e.target.id))
          break
        default:
          if (e.target.id.includes(OPERATORS_ID.num)) {
            dispatch(addTokenAction(e.target.textContent))
          } else {
            if (
              (tokenList.length &&
                tokenList[tokenList.length - 1].match(
                  /[\d√]/g,
                )) ||
              e.target.id === OPERATORS_ID.op_square_root ||
              e.target.id === OPERATORS_ID.bracket_left
            )
              dispatch(addTokenAction(e.target.id))
          }
      }
    },
    [dispatch, tokenList],
  )

  return (
    <KeypadContainer>
      {KEYPAD_BUTTONS.map((button, index) => {
        const NUMBER_OF_CLASSIC_BUTTONS = 19
        const countButtons =
          modeKeypad === MODE_CALCULATOR.classic
            ? NUMBER_OF_CLASSIC_BUTTONS
            : KEYPAD_BUTTONS.length

        return index < countButtons ? (
          <KeypadButton
            handle={clickButton}
            buttonInfo={button}
            key={`button_${button.id}`}
          />
        ) : null
      })}
    </KeypadContainer>
  )
}

export default Keypad
