import styled from 'styled-components'

const LogoContainer = styled.div`
  padding: ${({ theme }) => theme.spaces[1]}px;
  border-radius: ${({ theme }) => theme.spaces[1]}px;
  background-color: ${({ theme }) =>
    theme.colors.sixth_color};
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.second_color};
  }
`

export default LogoContainer
