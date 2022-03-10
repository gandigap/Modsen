import styled from 'styled-components'

export const TogglesContainer = styled.div`
  display: flex;
`
export const TogglesTitle = styled.h4`
  margin: ${({ theme }) => theme.spaces[2]}px;
  color: ${({ theme }) => theme.colors.fifth_color};
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
`
