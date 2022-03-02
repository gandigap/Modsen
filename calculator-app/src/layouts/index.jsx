import React from 'react'
import { Outlet } from 'react-router-dom'
import Calculator from 'components/Calculator'
import Header from 'components/Header'

const PageLayout = () => {
  return (
    <Calculator>
      <Header />
      <Outlet />
    </Calculator>
  )
}
export default PageLayout
