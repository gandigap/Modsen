import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { updateTokenListAction } from 'actions'
import {
  addToken,
  displayEquation,
  deleteLast,
  calculateAction,
} from 'actions/asyncActions'

const KeypadButtonContainer = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme.colors.secondary};
`

const KeypadButton = ({ buttonInfo }) => {
  const dispatch = useDispatch()

  const { tokenList, calcHistory } = useSelector(
    (state) => state.operationState,
  )

  const clickButton = useCallback(
    (e) => {
      switch (e.target.id) {
        case 'delete':
          dispatch(deleteLast())
          break
        case 'clear':
          if (tokenList.length === 0) {
            calcHistory.length = 0
          } else {
            tokenList.length = 0
            dispatch(displayEquation())
          }
          break
        case 'period':
          if (isNaN(tokenList[tokenList.length - 1])) {
            dispatch(updateTokenListAction('0.'))
          } else {
            if (
              tokenList[tokenList.length - 1].indexOf(
                '.',
              ) === -1
            ) {
              tokenList[tokenList.length - 1] += '.'
            }
          }
          dispatch(displayEquation())
          break
        case 'equals':
          dispatch(calculateAction())
          break
        case 'toggle-advanced':
          console.log('отобразить дополнительную панель')
          break
        case 'num-pi':
          dispatch(updateTokenListAction('num-pi'))
          break
        default:
          console.log(e.target.id)
          if (e.target.id.includes('num')) {
            dispatch(addToken(e.target.textContent))
          } else {
            dispatch(addToken(e.target.id))
          }
      }
    },
    [calcHistory, dispatch, tokenList],
  )

  return (
    <KeypadButtonContainer
      id={buttonInfo.id}
      onClick={clickButton}>
      {buttonInfo.valueButton}
    </KeypadButtonContainer>
  )
}

export default KeypadButton
