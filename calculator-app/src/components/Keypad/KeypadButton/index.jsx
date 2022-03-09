import React, { useCallback } from 'react'
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

import styled from 'styled-components'

const KeypadButtonContainer = styled.button`
  width: 100%;
  min-height: ${({ theme }) => theme.spaces[5]}px;
  height: 100%;
  border: none;
  border-radius: ${({ theme }) => theme.spaces[2]}px;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  font-weight: bold;
  background-color: ${({ theme }) =>
    theme.colors.third_color};
  color: ${({ theme }) => theme.colors.fourth_color};
  cursor: pointer;
  text-decoration: none;
  transition: all ease 0.3s;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.95);
    ${({ theme }) => theme.boxShadows[0]};
  }

  &.num {
    color: ${({ theme }) => theme.colors.fifth_color};
  }

  &.primary_operator {
    background-color: ${({ theme }) =>
      theme.colors.fifth_color};
  }
`

const KeypadButton = ({ buttonInfo }) => {
  const dispatch = useDispatch()

  const { tokenList } = useSelector(
    (state) => state.operationState,
  )

  const clickButton = useCallback(
    (e) => {
      switch (e.target.id) {
        case 'delete':
          dispatch(deleteLastTokenAction())
          break
        case 'clear':
          if (tokenList.length === 0) {
            dispatch(clearCalcHistoryAction())
          } else {
            dispatch(clearTokenListAction())
            dispatch(displayEquationAction())
          }
          break
        case 'period':
          if (isNaN(tokenList[tokenList.length - 1])) {
            dispatch(addTokenAction('0.'))
          } else {
            dispatch(addPeriodAction())
          }
          dispatch(displayEquationAction())
          break
        case 'equals':
          dispatch(calculateAction())
          break
        case 'num-pi':
          dispatch(addTokenAction('num-pi'))
          break
        default:
          if (e.target.id.includes('num')) {
            dispatch(addTokenAction(e.target.textContent))
          } else {
            dispatch(addTokenAction(e.target.id))
          }
      }
    },
    [dispatch, tokenList],
  )

  return (
    <KeypadButtonContainer
      id={buttonInfo.id}
      className={buttonInfo.class}
      onClick={clickButton}>
      {buttonInfo.valueButton}
    </KeypadButtonContainer>
  )
}

export default KeypadButton
