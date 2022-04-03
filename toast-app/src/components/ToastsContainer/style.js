import styled from 'styled-components'

export const StyledToastContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1000;

  &.top_left {
    top: 20px;
    left: 20px;
  }

  &.top_right {
    top: 20px;
    right: 20px;
  }

  &.bottom_left {
    bottom: 20px;
    left: 20px;
  }

  &.bottom_right {
    bottom: 20px;
    right: 20px;
  }
`
