import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import ToastPortal from '../ToastPortal'
import Toast from './Toast'

import { StyledToastContainer } from './style'

const ToastsContainer = ({ position, toastList }) => {
  const [list, setList] = useState(toastList)

  const deleteToast = (id) => (e) => {
    list.splice(id, 1)
    toastList.splice(id, 1)
    setList([...list])
    console.log('ha')
  }

  useEffect(() => {
    setList([...toastList])
    console.log('use effect')
  }, [toastList])

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length && list.length) {
        list.shift()
        toastList.shift()
        setList([...list])
        console.log('true')
      }
      console.log('useEffect some')
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [toastList, list])
  console.log('container')
  return (
    <ToastPortal>
      <StyledToastContainer className={position}>
        {toastList?.map((toastProperty, index) => (
          <Toast
            key={`toastProperty-${index}`}
            id={index}
            {...toastProperty}
            handleClick={deleteToast}
          />
        ))}
      </StyledToastContainer>
    </ToastPortal>
  )
}

ToastsContainer.propTypes = {
  position: PropTypes.string,
  toastList: PropTypes.array,
}

export default ToastsContainer
