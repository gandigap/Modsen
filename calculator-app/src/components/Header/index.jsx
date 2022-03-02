import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Navigation from './Navigation'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
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
