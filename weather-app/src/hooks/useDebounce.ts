import React, { useRef, useCallback } from 'react'

const useDebounce = (callback: any, delay: number) => {
  const timer: { current: NodeJS.Timeout | null } = useRef(null)

  const debounceCallback = useCallback(
    (...args) => {
      timer.current && clearTimeout(timer.current)
      timer.current = setTimeout(() => {
        callback(...args)
      }, delay)
    },
    [callback, delay],
  )

  return debounceCallback
}

export default useDebounce
