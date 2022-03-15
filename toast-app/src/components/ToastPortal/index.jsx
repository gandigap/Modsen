import { useEffect } from 'react'
import { createPortal } from 'react-dom'

import './style.css'

const ToastPortal = ({ children }) => {
  const modal = document.createElement('div')
  const modalWrapper = document.createElement('div')
  modal.setAttribute('id', 'modal')
  modalWrapper.setAttribute('id', 'modal__wrapper')
  document.body.appendChild(modal)

  useEffect(() => {
    modal.appendChild(modalWrapper)
    return () => {
      modal.removeChild(modalWrapper)
      document.getElementById('modal').remove()
    }
  }, [modal, modalWrapper])

  return createPortal(children, modalWrapper)
}

export default ToastPortal
