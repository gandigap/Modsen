import React from 'react'
import { Link } from 'react-router-dom'

import { HOME_PAGE_ROUTE, TEXT } from 'constants'

import LogoContainer from './style'
const Logo = () => {
  return (
    <LogoContainer>
      <Link to={HOME_PAGE_ROUTE}>
        {TEXT.calculator_app}
      </Link>
    </LogoContainer>
  )
}

export default Logo
