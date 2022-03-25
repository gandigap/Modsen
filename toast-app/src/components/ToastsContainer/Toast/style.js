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

  &.animation-start {
    animation: ${({ delay }) => delay / 1000}s
      ${({ animation }) =>
        animation === TOAST_ANIMATIONS.vertical
          ? 'start-y'
          : 'start-x'}
      0s;
  }

  &.animation-end {
    animation: ${({ delay }) => delay / 1000}s
      ${({ animation }) =>
        animation === TOAST_ANIMATIONS.vertical
          ? 'end-y'
          : 'end-x'}
      0s;
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
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-100%);
      opacity: 0;
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
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(-100%);
      opacity: 0;
    }
  }
`

export const StyledToastTitle = styled.h4`
  margin: 0;
  padding: 4px;
  font-size: 20px;
  font-weight: bold;
`

export const StyledToastText = styled.div`
  flex-grow: 1;
`
export const StyledToastContent = styled.p`
  margin: 0;
  padding: 4px;
  font-size: 16px;
`

export const StyledTypeIcon = styled.div`
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
