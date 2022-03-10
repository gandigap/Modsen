import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { operationSelector } from 'selectors'
import { TEXT } from 'constants'

import {
  HistoryContainer,
  HistoryTitle,
  HistoryExpression,
  HistoryResult,
} from './style'

const History = () => {
  const [calcHistoryState, setCalcHistoryState] = useState(
    [],
  )
  const { calcHistory } = useSelector(operationSelector)

  useEffect(() => {
    setCalcHistoryState(calcHistory)
  }, [calcHistory])

  return (
    <HistoryContainer>
      <HistoryTitle>{TEXT.history}</HistoryTitle>
      {calcHistoryState.length
        ? calcHistoryState.map((el, index) => (
            <HistoryExpression
              key={`history_item_${index}`}>
              {`${el.expression} = `}
              <HistoryResult>{el.out}</HistoryResult>
            </HistoryExpression>
          ))
        : null}
    </HistoryContainer>
  )
}

export default History
