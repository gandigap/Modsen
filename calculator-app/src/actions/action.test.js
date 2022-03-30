import { updateTokenListAction } from './index'
import { UPDATE_TOKENLIST } from '../constants'

it('should return action', () => {
  expect(updateTokenListAction('token')).toEqual({
    type: UPDATE_TOKENLIST,
    payload: 'token',
  })
})
