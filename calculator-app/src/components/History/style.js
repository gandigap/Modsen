import styled from 'styled-components'

export const HistoryContainer = styled.div`
  padding: ${({ theme }) => theme.spaces[3]}px;
  grid-area: history;
  border-left: 1px solid
    ${({ theme }) => theme.colors.fourth_color};
  color: ${({ theme }) => theme.colors.sixth_color};
`

export const HistoryTitle = styled.h3`
  color: ${({ theme }) => theme.colors.fifth_color};
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  padding-bottom: ${({ theme }) => theme.spaces[3]}px;
`

export const HistoryExpression = styled.p`
  color: ${({ theme }) => theme.colors.sixth_color};
  font-style: italic;
  padding-bottom: ${({ theme }) => theme.spaces[1]}px;
`

export const HistoryResult = styled.span`
  color: ${({ theme }) => theme.colors.fifth_color};
  font-weight: bold;
  font-style: normal;
`
