import { LocationDataType } from './locationDataType'

export interface LocationStateType {
  location: LocationDataType
  loading: boolean
  error: null | string
}
