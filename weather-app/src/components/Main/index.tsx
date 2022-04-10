import React, { useEffect } from 'react'
import { fetchLocationActionCreator } from 'actions'

import { DefaultRootState, useDispatch, useSelector } from 'react-redux'

import { StyledMain } from './styles'
import CityInput from './CityInput.tsx'

const Main = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchLocationActionCreator())
  }, [])

  return (
    <StyledMain>
      <CityInput />
    </StyledMain>
  )
}

export default Main
