import useDebounce from 'hooks/useDebounce'
import { useTypedSelector } from 'hooks/useTypedSelector'
import React, { useState, useEffect, useCallback } from 'react'
import { StyledCityInput } from './styles'

const CityInput = () => {
  const [inputValue, setInputValue] = useState('')

  const { location } = useTypedSelector((state) => state.locationState)

  const handleChangeInputValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    debounceHandleChangeInputValue()
  }, [])

  const someThingDo = () => {
    console.log('something do')
  }

  const debounceHandleChangeInputValue = useDebounce(someThingDo, 2000)

  useEffect(() => {
    setInputValue(location)
  }, [location])

  return <StyledCityInput type={'text'} value={inputValue} onChange={handleChangeInputValue} />
}

export default CityInput
