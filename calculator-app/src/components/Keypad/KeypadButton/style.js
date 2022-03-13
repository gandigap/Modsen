import styled from 'styled-components'

const KeypadButtonContainer = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spaces[3]}px;
  height: 100%;
  border: none;
  border-radius: ${({ theme }) => theme.spaces[2]}px;
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  font-weight: bold;
  background-color: ${({ theme }) =>
    theme.colors.third_color};
  color: ${({ theme }) => theme.colors.fifth_color};
  cursor: pointer;
  text-decoration: none;
  transition: all ease 0.3s;

  ${({ theme }) =>
    theme.below.med({
      'font-size': `${theme.fontSizes[3]}px`,
      padding: `${theme.spaces[2]}px`,
    })}

  ${({ theme }) =>
    theme.below.small({
      'font-size': `${theme.fontSizes[2]}px`,
    })}

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.fourth_color};
  }

  &:active {
    transform: scale(0.95);
  }

  &.num {
    color: ${({ theme }) => theme.colors.sixth_color};
  }

  &.primary_operator {
    background-color: ${({ theme }) =>
      theme.colors.sixth_color};
    color: ${({ theme }) => theme.colors.first_color};
  }
`

export default KeypadButtonContainer
