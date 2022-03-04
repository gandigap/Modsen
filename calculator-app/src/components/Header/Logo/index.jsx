import React from 'react'
import { Link } from 'react-router-dom'

import { HOME_PAGE_ROUTE } from 'constants'

import styled from 'styled-components'

const LogoContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.fourth_color};
  }
`

const Logo = () => {
  return (
    <LogoContainer>
      {' '}
      <Link to={HOME_PAGE_ROUTE}>Calculator App</Link>
    </LogoContainer>
  )
}

export default Logo
