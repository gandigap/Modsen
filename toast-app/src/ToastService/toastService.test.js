/* eslint-disable no-undef */
import { toastService } from '../ToastService'

describe('ToastService', () => {
  it('check properties of ToastService', () => {
    expect(toastService).toHaveProperty('timer')
    expect(toastService).toHaveProperty('toastList')
    expect(toastService).toHaveProperty('subscribers')
  })

  it('should add the subscriber to ToastService subscribers', () => {
    toastService.subscribe('some subscriber', () => {})
    expect(toastService.subscribers.size).toBe(1)
  })
})
