import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const NavigationContainer = styled.nav`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  a {
    padding: 0 5px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.fourth_color};

    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.third_color};
    }
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
