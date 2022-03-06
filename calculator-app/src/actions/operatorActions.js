import {
  UPDATE_TOKENLIST,
  UPDATE_DISPLAY_VALUE,
} from 'constants'

export const updateTokenListAction = (payload) => ({
  type: UPDATE_TOKENLIST,
  payload,
})

export const updateDisplayValueAction = (payload) => ({
  type: UPDATE_DISPLAY_VALUE,
  payload,
})
