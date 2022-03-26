import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import ToastPortal from '../ToastPortal'
import Toast from './Toast'

import { StyledToastContainer } from './style'

export const ToastsContainer = ({
  position,
  toastList,
  handleClick,
  delay,
}) => {
  const [list, setList] = useState(toastList)

  const changeList = (id = 0) => {
    setList(list.splice(id, 1))
  }

  useEffect(() => {
    const timer = setInterval(() => {
      changeList()
      handleClick()
    }, delay)
    return () => {
      clearInterval(timer)
    }
  }, [changeList, delay, handleClick])

  return (
    <ToastPortal>
      <StyledToastContainer className={position}>
        {toastList?.map((toastProperty, index) => (
          <Toast
            id={index}
            key={`toastProperty-${index}`}
            changeList={changeList}
            {...toastProperty}
          />
        ))}
      </StyledToastContainer>
    </ToastPortal>
  )
}

ToastsContainer.propTypes = {
  position: PropTypes.string,
  toastList: PropTypes.array,
  handleClick: PropTypes.func,
  delay: PropTypes.number,
}
