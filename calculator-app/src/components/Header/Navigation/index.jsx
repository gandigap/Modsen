import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavigationContainer = styled.nav`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  a {
    color: ${({ theme }) => theme.colors.secondaryLight};
  }
`

const Navigation = () => {
  return (
    <NavigationContainer>
      <Link to="/">Home</Link>
      <Link to="/setting">Setting</Link>
    </NavigationContainer>
  )
}

export default Navigation
