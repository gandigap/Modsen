import React from 'react'

import Display from 'components/Display'
import KeyPad from 'components/Keypad'
import History from 'components/History'

import HomePageContainer from './style'

const HomePage = () => {
  return (
    <HomePageContainer>
      <Display />
      <KeyPad />
      <History />
    </HomePageContainer>
  )
}
export default HomePage
