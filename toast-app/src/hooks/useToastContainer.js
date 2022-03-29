import { useEffect, useState } from 'react'
import { toastService } from '@/ToastService'

export const useToastContainer = () => {
  const [toastList, setToastList] = useState(
    toastService.toastList,
  )

  const updateList = (list) => {
    setToastList(list)
  }

  useEffect(() => {
    toastService.subscribe('useToastContainer', updateList)
    return () => {
      toastService.unsubscribe('useToastContainer')
    }
  }, [])

  return { toastList }
}
