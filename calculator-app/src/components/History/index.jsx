import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components'

const HistoryContainer = styled.div`
  padding: 20px;
  grid-area: history;

  border-left: 1px solid
    ${({ theme }) => theme.colors.fourth_color};
  color: ${({ theme }) => theme.colors.fourth_color};
`

const HistoryTitle = styled.h3`
  color: ${({ theme }) => theme.colors.fourth_color};
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  padding-bottom: ${({ theme }) => theme.spaces[3]}px;
`

const History = () => {
  const [calcHistoryState, setCalcHistoryState] = useState(
    [],
  )
  const { calcHistory } = useSelector(
    (state) => state.operationState,
  )

  useEffect(() => {
    setCalcHistoryState(calcHistory)
  }, [calcHistory])

  return (
    <HistoryContainer>
      <HistoryTitle>HISTORY</HistoryTitle>
      {calcHistoryState.length
        ? calcHistoryState.map((el, index) => (
            <p
              key={
                index
              }>{`${el.expression} = ${el.out}`}</p>
          ))
        : null}
    </HistoryContainer>
  )
}

export default History
