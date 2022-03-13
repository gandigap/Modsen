import React from 'react'
import { Link } from 'react-router-dom'

import { HOME_PAGE_ROUTE, PAGES_TEXT } from 'constants'

import LogoContainer from './style'

const Logo = () => (
  <LogoContainer>
    <Link to={HOME_PAGE_ROUTE}>
      {PAGES_TEXT.calculator_app}
    </Link>
  </LogoContainer>
)

export default Logo
