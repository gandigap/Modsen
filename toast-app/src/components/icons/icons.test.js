/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import { InfoIcon } from './index.js'

describe('InfoIcon', () => {
  it('should render InfoIcon with props', () => {
    const component = shallow(<InfoIcon color={'red'} />)
    expect(component).toMatchSnapshot()
  })
})
