import styled from 'styled-components'

export const SettingPageContainer = styled.div`
  margin: ${({ theme }) => theme.spaces[3]}px;
`

export const SettingPageTitle = styled.h3`
  padding-bottom: ${({ theme }) => theme.spaces[3]}px;
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  color: ${({ theme }) => theme.colors.fifth_color};
`
