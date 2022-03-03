import Display from 'components/Display'
import KeyPad from 'components/Keypad'
import History from 'components/History'
import React from 'react'

import styled from 'styled-components'

const HomePageContainer = styled.div`
  margin: 10px;
  height: 80%;
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: 70% 30%;
  grid-template-areas:
    'display history'
    'keypad history';
`

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
