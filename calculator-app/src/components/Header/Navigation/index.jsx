import React from 'react'
import { NavLink } from 'react-router-dom'

import {
  HOME_PAGE_ROUTE,
  SETTING_PAGE_ROUTE,
  NAMES_OF_PAGES,
} from 'constants/'

import NavigationContainer from './style'

const setActiveLink = ({ isActive }) =>
  isActive ? 'active-link' : ''

const Navigation = () => (
  <NavigationContainer>
    <NavLink to={HOME_PAGE_ROUTE} className={setActiveLink}>
      {NAMES_OF_PAGES.home}
    </NavLink>
    <NavLink
      to={SETTING_PAGE_ROUTE}
      className={setActiveLink}>
      {NAMES_OF_PAGES.settings}
    </NavLink>
  </NavigationContainer>
)

export default Navigation
