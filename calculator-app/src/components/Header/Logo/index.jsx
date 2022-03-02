import React from 'react'
import styled from 'styled-components'

const LogoContainer = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes[3]};
  color: ${({ theme }) => theme.colors.secondaryLight};
`

const Logo = () => {
  return <LogoContainer>Calculator</LogoContainer>
}

export default Logo
