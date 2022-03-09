import React from 'react'
import { NavLink } from 'react-router-dom'

import {
  HOME_PAGE_ROUTE,
  SETTING_PAGE_ROUTE,
  NAMES_OF_PAGES,
} from 'constants'

import styled from 'styled-components'

const NavigationContainer = styled.nav`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  a {
    padding: 0 5px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.third_color};

    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.fourth_color};
    }
  }

  .active-link {
    color: ${({ theme }) => theme.colors.fourth_color};
  }
`
const setActiveLink = ({ isActive }) =>
  isActive ? 'active-link' : ''
const Navigation = () => {
  return (
    <NavigationContainer>
      <NavLink
        to={HOME_PAGE_ROUTE}
        className={setActiveLink}>
        {NAMES_OF_PAGES.home}
      </NavLink>
      <NavLink
        to={SETTING_PAGE_ROUTE}
        className={setActiveLink}>
        {NAMES_OF_PAGES.settings}
      </NavLink>
    </NavigationContainer>
  )
}

export default Navigation
