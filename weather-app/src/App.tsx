import React, { useEffect } from 'react'

import Footer from 'components/Footer'
import Main from 'components/Main'

import GlobalStyle from 'globalStyle'
import { StyledApp } from 'style'
import { useDispatch } from 'react-redux'
import {
  fetchLocationErrorActionCreator,
  updateCoordinatesActionCreator,
  fetchLocationActionCreator,
  fetchWeatherActionCreator,
} from 'actions'

const App: React.FC = () => {
  const dispatch = useDispatch()

  const getCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      (pos: GeolocationPosition) => {
        const coordinates = { lat: pos.coords.latitude, lon: pos.coords.longitude }
        dispatch(updateCoordinatesActionCreator(coordinates))
        dispatch(fetchLocationActionCreator())
      },
      (error: GeolocationPositionError) => dispatch(fetchLocationErrorActionCreator(error.message)),
    )
  }
  const handleClick = () => {
    dispatch(fetchWeatherActionCreator())
  }

  useEffect(() => {
    getCoordinates()
  }, [])

  return (
    <StyledApp>
      <GlobalStyle />
      <Main />
      <button onClick={handleClick}>Some</button>
      <Footer />
    </StyledApp>
  )
}

export default App
