import styled from 'styled-components'
import { TOAST_ANIMATIONS } from '@/constants'
import { getPadding } from '@/utils'
export const StyledToastContainer = styled.div`
  margin: 10px;
  padding: ${({ size }) => getPadding(size).padding};
  min-width: 200px;
  min-height: 40px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) =>
    backgroundColor};
  animation: 0.5s
    ${(props) =>
      props.animation === TOAST_ANIMATIONS.vertical
        ? 'start-y'
        : 'start-x'}
    1s;

  &.animation-start {
    animation: 0.5s
      ${({ animation }) =>
        animation === TOAST_ANIMATIONS.vertical
          ? 'start-y'
          : 'start-x'}
      1s;
  }

  &.animation-end {
    animation: 0.5s
      ${({ animation }) =>
        animation === TOAST_ANIMATIONS.ease
          ? 'end-y'
          : 'end-x'}
      1s;
  }

  &:hover {
    -webkit-box-shadow: 4px 4px 8px 0px
      rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  }

  @keyframes start-y {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes end-y {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes start-x {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes end-x {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`

export const StyledToastTitle = styled.span`
  flex-grow: 1;
  padding: 4px;
  font-size: 20px;
  font-weight: bold;
`

export const StypedTypeIcon = styled.div`
  width: 30px;
  height: 30px;
`

export const StyledCloseIcon = styled.button`
  margin: 0;
  padding: 0;
  width: 20px;
  height: 20px;
  display: inline-block;
  border: none;
  text-decoration: none;
  background: transparent;
  align-self: start;
  cursor: pointer;
`
