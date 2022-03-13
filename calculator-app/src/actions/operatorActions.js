import {
  UPDATE_TOKENLIST,
  UPDATE_DISPLAY_VALUE,
  UPDATE_CALCHISTORY,
  CLEAR_TOKENLIST,
  CLEAR_CALCHISTORY,
  ADD_PERIOD,
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

export const clearTokenListAction = () => ({
  type: CLEAR_TOKENLIST,
})

export const clearCalcHistoryAction = () => ({
  type: CLEAR_CALCHISTORY,
})

export const addPeriodAction = () => ({
  type: ADD_PERIOD,
})
