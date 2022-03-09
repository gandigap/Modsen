import React from 'react'

import SelectColor from 'components/SelectColor'
import SelectMode from 'components/SelectMode'

import { NAMES_OF_PAGES } from 'constants'

import styled from 'styled-components'

const SettingPageContainer = styled.div`
  margin: ${({ theme }) => theme.spaces[3]}px;
`

const SettingPageTitle = styled.h3`
  padding-bottom: ${({ theme }) => theme.spaces[3]}px;
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  color: ${({ theme }) => theme.colors.fourth_color};
`

const SettingPage = () => {
  return (
    <SettingPageContainer>
      <SettingPageTitle>
        {NAMES_OF_PAGES.settings}
      </SettingPageTitle>
      <SelectColor />
      <SelectMode />
    </SettingPageContainer>
  )
}
export default SettingPage
