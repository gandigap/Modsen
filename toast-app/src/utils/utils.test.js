/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { getDefaultColors } from './getStyles'
import { TOAST_TYPES } from '../constants'

describe('Utils', () => {
  it('should return correct object', () => {
    expect(getDefaultColors(TOAST_TYPES.info)).toEqual({
      font: '#fff',
      background: '#9A40D3',
    })
  })
})
