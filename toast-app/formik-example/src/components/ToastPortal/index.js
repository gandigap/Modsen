import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const ToastPortal = ({
  children,
  id = 'root__portal',
  el = 'div',
}) => {
  const [portal] = useState(() => {
    return document.createElement(el)
  })

  useEffect(() => {
    portal.id = id
    document.body.appendChild(portal)
    return () => {
      document.body.removeChild(portal)
    }
  }, [id, portal])

  return createPortal(children, portal)
}

export default ToastPortal
