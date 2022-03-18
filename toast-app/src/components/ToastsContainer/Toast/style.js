import styled from 'styled-components'

export const StyledToastContainer = styled.div`
  display: inline-flex;
  margin: 10px;
  justify-content: space-between;
  align-items: center;
  min-width: 200px;
  min-height: 40px;
  border-radius: 10px;

  &:hover {
    -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
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
