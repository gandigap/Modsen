import styled from 'styled-components'

const ColorToggleContainer = styled.input`
  & {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 80px;
    height: 32px;
    display: inline-block;
    position: relative;
    border-radius: 50px;
    overflow: hidden;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: ${({ theme }) =>
      theme.colors.sixth_color};
    transition: background-color ease 0.3s;
  }

  &:before {
    content: 'dark light';
    display: block;
    position: absolute;
    z-index: 2;
    width: 28px;
    height: 28px;
    background-color: ${({ theme }) =>
      theme.colors.fourth_color};
    left: 2px;
    top: 2px;
    border-radius: 50%;
    font: 10px/28px Helvetica;
    text-transform: uppercase;
    font-weight: bold;
    text-indent: -38px;
    word-spacing: 37px;
    color: ${({ theme }) => theme.colors.fifth_color};
    text-shadow: -1px -1px rgba(0, 0, 0, 0.15);
    white-space: nowrap;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s;
  }

  &:checked {
    background-color: ${({ theme }) =>
      theme.colors.sixth_color};
    color: ${({ theme }) => theme.colors.first_color};
  }

  &:checked:before {
    left: 50px;
  }
`

export default ColorToggleContainer
