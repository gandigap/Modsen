import React, {
  useEffect,
  useState,
  useCallback,
} from 'react'
import { toastService } from 'ToastService'

export const useToastContainer = () => {
  const [toastList, setToastList] = useState(
    toastService.toastList,
  )

  const updateList = useCallback(
    (list) => {
      console.log(toastList, ' list before update')
      setToastList(list)
      console.log(toastList, 'list after update')
    },
    [toastList],
  )

  useEffect(() => {
    toastService.subscribe('useToastContainer', updateList)
    return () => {
      toastService.unsubscribe('useToastContainer')
    }
  }, [updateList])

  const render = (callback) => {
    return toastList.map(callback)
  }
  return render
}
