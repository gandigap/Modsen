import React from 'react'

import Toogles from 'components/Toggles'
import { NAMES_OF_PAGES, PAGE_TEXT } from 'constants'

import {
  SettingPageContainer,
  SettingPageTitle,
} from './style'

const SettingPage = () => {
  return (
    <SettingPageContainer>
      <SettingPageTitle>
        {NAMES_OF_PAGES.settings}
      </SettingPageTitle>
      <Toogles type={PAGE_TEXT.theme} />
      <Toogles type={PAGE_TEXT.mode} />
    </SettingPageContainer>
  )
}
export default SettingPage
