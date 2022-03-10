import styled from 'styled-components'

const DisplayContainer = styled.div`
  grid-area: display;
  padding: ${({ theme }) => theme.spaces[3]}px;
  text-align: right;
  font-size: ${({ theme }) => theme.fontSizes[5]}px;
  color: ${({ theme }) => theme.colors.sixth_color};

  ${({ theme }) =>
    theme.below.med({
      'min-height': `${theme.fontSizes[8]}px`,
    })}
`

export default DisplayContainer
