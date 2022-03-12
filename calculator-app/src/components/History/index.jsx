import React from 'react'
import { useSelector } from 'react-redux'

import { operationSelector } from 'selectors'
import { PAGE_TEXT } from 'constants'

import {
  HistoryContainer,
  HistoryTitle,
  HistoryExpression,
  HistoryResult,
} from './style'

const History = () => {
  const { calcHistory } = useSelector(operationSelector)

  return (
    <HistoryContainer>
      <HistoryTitle>{PAGE_TEXT.history}</HistoryTitle>
      {(calcHistory.length &&
        calcHistory.map((el, index) => (
          <HistoryExpression key={`history_item_${index}`}>
            {`${el.expression} = `}
            <HistoryResult>{el.out}</HistoryResult>
          </HistoryExpression>
        ))) ||
        null}
    </HistoryContainer>
  )
}

export default History
