import { usePortal } from '../../hooks'
import { createPortal } from 'react-dom'

const Portal = ({ id = 'root__portal', children }) => {
  const target = usePortal(id)
  return createPortal(children, target)
}

export default Portal
