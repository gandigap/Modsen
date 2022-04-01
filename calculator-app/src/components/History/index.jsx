import React from 'react'
import { useSelector } from 'react-redux'

import { operationSelector } from 'selectors'
import { PAGES_TEXT } from 'constants/'

import {
  HistoryContainer,
  HistoryTitle,
  HistoryExpression,
  HistoryResult,
} from './style'

const History = () => {
  const { calcHistory } = useSelector(operationSelector)

  const historyExpressionRender = (item, index) => (
    <HistoryExpression key={`history_item_${index}`}>
      {`${item.expression} = `}
      <HistoryResult>{item.out}</HistoryResult>
    </HistoryExpression>
  )

  return (
    <HistoryContainer>
      <HistoryTitle>{PAGES_TEXT.history}</HistoryTitle>
      {calcHistory?.map(historyExpressionRender)}
    </HistoryContainer>
  )
}

export default History
