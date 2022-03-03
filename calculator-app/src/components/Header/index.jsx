import React from 'react'

import Logo from './Logo'
import Navigation from './Navigation'

import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  padding: 20px;
  text-align: center;
  justify-content: space-between;
  background-color: ${({ theme }) =>
    theme.colors.first_color};
`

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Navigation />
    </HeaderContainer>
  )
}

export default Header
