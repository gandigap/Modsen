import styled from 'styled-components'

const NavigationContainer = styled.nav`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes[3]}px;

  a {
    padding: 0 ${({ theme }) => theme.spaces[1]}px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.fifth_color};

    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.sixth_color};
    }
  }

  .active-link {
    color: ${({ theme }) => theme.colors.sixth_color};
  }
`

export default NavigationContainer
