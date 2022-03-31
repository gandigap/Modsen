import { useEffect, useState } from 'react'
import { toastService } from '@/ToastService'
import { DISPATCH_UPDATE_LIST } from '@/constants'

export const useToastContainer = () => {
  const [toastList, setToastList] = useState(
    toastService.toastList,
  )

  const updateList = (list) => {
    setToastList(list)
  }

  useEffect(() => {
    toastService.subscribe(DISPATCH_UPDATE_LIST, updateList)
    return () => {
      toastService.unsubscribe(DISPATCH_UPDATE_LIST)
    }
  }, [])

  return { toastList }
}
