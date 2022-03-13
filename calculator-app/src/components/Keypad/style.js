import styled from 'styled-components'

const KeypadContainer = styled.div`
  margin: ${({ theme }) => theme.spaces[0]}px
    ${({ theme }) => theme.spaces[2]}px;
  padding: ${({ theme }) => theme.spaces[3]}px;
  grid-area: keypad;
  display: grid;
  grid-gap: ${({ theme }) => theme.spaces[2]}px;
  justify-items: center;
  justify-content: center;
  align-content: center;
  align-items: center;
  border-top: 1px solid
    ${({ theme }) => theme.colors.fourth_color};

  & button:nth-child(10) {
    grid-row: 2 / 4;
    grid-column: 5;
  }
`

export default KeypadContainer
