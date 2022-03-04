import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  calculate,
  addToken,
  displayEquation,
  deleteLast,
} from 'utils'
import styled from 'styled-components'

const KeypadButtonContainer = styled.button`
  margin: 20px;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme.colors.secondary};
`

const KeypadButton = ({ buttonInfo }) => {
  const dispatch = useDispatch()

  const clickButton = useCallback((e) => {
    //получить tokenList и catchHistory
    let tokenList = []
    let calcHistory = []
    switch (e.target.dataset.action) {
      case 'delete':
        deleteLast()
        break
      case 'clear':
        if (tokenList.length === 0) {
          calcHistory.length = 0
        } else {
          tokenList.length = 0
          displayEquation()
        }
        break
      case 'period':
        if (isNaN(tokenList[tokenList.length - 1])) {
          addToken('0.')
        } else {
          if (
            tokenList[tokenList.length - 1].indexOf('.') ===
            -1
          ) {
            tokenList[tokenList.length - 1] += '.'
          }
        }
        displayEquation()
        break
      case 'equals':
        calculate(tokenList)
        break
      case 'toggle-advanced':
        console.log('отобразить дополнительную панель')
        break
      case 'num-pi':
        addToken('num-pi')
        break
      default:
        //значение кнопки !!!!!!!!
        if (1 > 2 /* $(button).hasClass('num') */) {
          addToken('нужная цифра')
        } else {
          addToken('нужный id')
        }
    }
    console.log(e.target.dataset.action)
  }, [])

  return (
    <KeypadButtonContainer
      data-action={buttonInfo.action}
      onClick={clickButton}>
      {buttonInfo.value}
    </KeypadButtonContainer>
  )
}

export default KeypadButton
