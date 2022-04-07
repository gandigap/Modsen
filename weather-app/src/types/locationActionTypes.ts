import { LocationDataType } from './locationDataType'

interface FetchLocationAction {
  type: string
}

interface FetchLocationSuccessAction {
  type: string
  payload: LocationDataType
}

interface FetchLocationErrorAction {
  type: string
  payload: string
}

export type LocationActions =
  | FetchLocationAction
  | FetchLocationErrorAction
  | FetchLocationSuccessAction
