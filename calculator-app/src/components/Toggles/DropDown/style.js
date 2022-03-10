import styled from 'styled-components'

export const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
`

export const DropDownButton = styled.button`
  padding: ${({ theme }) => theme.spaces[1]}px;
  height: ${({ theme }) => theme.spaces[4]}px;
  width: ${({ theme }) => theme.spaces[6]}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  text-decoration: none;
  text-align: start;
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) =>
    theme.colors.sixth_color};
`

export const DropDownButtonText = styled.span`
  text-transform: uppercase;
`

export const DropDownList = styled.ul`
  width: ${({ theme }) => theme.spaces[6]}px;
  list-style: none;
  background-color: ${({ theme }) =>
    theme.colors.sixth_color};
  color: ${({ theme }) => theme.colors.fifth_color};

  &.hide_select_mode {
    display: none;
  }
`

export const DropDownListItem = styled.li`
  padding: ${({ theme }) => theme.spaces[1]}px;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    color: ${({ theme }) => theme.colors.second_color};
  }
`
