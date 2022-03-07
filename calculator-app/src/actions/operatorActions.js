import {
  UPDATE_TOKENLIST,
  UPDATE_DISPLAY_VALUE,
  UPDATE_CALCHISTORY,
} from 'constants'

export const updateTokenListAction = (payload) => ({
  type: UPDATE_TOKENLIST,
  payload,
})

export const updateDisplayValueAction = (payload) => ({
  type: UPDATE_DISPLAY_VALUE,
  payload,
})

export const updateCalcHistoryAction = (payload) => ({
  type: UPDATE_CALCHISTORY,
  payload,
})
