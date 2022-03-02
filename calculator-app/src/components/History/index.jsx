import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const HistoryContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[5]};
`

const HistoryTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes[3]};
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
