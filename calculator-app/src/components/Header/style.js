import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spaces[3]}px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) =>
    theme.colors.first_color};
`

export default HeaderContainer
