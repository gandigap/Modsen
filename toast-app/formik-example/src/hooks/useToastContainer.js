import { useEffect, useState } from 'react'
import { toastService } from '../ToastService'

export const useToastContainer = () => {
  const [toastList, setToastList] = useState(
    toastService.toastList,
  )

  const updateList = (list) => {
    console.log(toastList, ' list before update')
    setToastList(list)
    console.log(toastList, 'list after update')
  }

  useEffect(() => {
    toastService.subscribe('useToastContainer', updateList)
    return () => {
      toastService.unsubscribe('useToastContainer')
    }
  }, [])

  return { toastList }
}
