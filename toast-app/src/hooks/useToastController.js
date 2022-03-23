import { useEffect } from 'react'
import ToastService from '../ToastService'
import {
  DISPATCH_SHOW_TOAST,
  DISPATCH_REMOVE_TOAST,
} from '../constants'

export const useToastContainer = () => {
  const toastController = ToastService.instance

  const showToast = (options) => {}

  const removeToast = (options) => {}

  useEffect(() => {
    toastController.addListener(
      DISPATCH_SHOW_TOAST,
      showToast,
    )
    toastController.addListener(
      DISPATCH_REMOVE_TOAST,
      removeToast,
    )
    return () => toastController.list.clear()
  }, [])
}
