import React from 'react'
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
  color: ${({ theme }) => theme.colors.third_color};
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
`

const History = () => {
  const operationState = useSelector(
    (state) => state.operationState,
  )

  return (
    <HistoryContainer>
      <HistoryTitle>HISTORY</HistoryTitle>
      {operationState.prevNumber +
        ' ' +
        operationState.currentNumber}
    </HistoryContainer>
  )
}

export default History
