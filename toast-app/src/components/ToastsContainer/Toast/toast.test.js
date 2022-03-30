/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import Toast from './index.js'

describe('Toast', () => {
  it('should render Toast without props', () => {
    const component = shallow(<Toast />)
    expect(component).toMatchSnapshot()
  })
})
