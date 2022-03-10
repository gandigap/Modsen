import React from 'react'

import Logo from './Logo'
import Navigation from './Navigation'

import HeaderContainer from './style'

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Navigation />
    </HeaderContainer>
  )
}

export default Header
