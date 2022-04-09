import React, { useEffect } from 'react'
import { fetchLocationActionCreator } from 'actions'

import { useDispatch } from 'react-redux'

import { StyledMain } from './styles'

const Main = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchLocationActionCreator())
  }, [])

  return <StyledMain>Main</StyledMain>
}

export default Main
