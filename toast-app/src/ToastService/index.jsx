import ToastPortal from '../components/ToastPortal'
import Toast from '../components/Toast'
import ErrorBoundary from '../components/ErrorBoundary'

class ToastService {
  constructor(toastList) {
    if (typeof ToastService.instance === 'object') return ToastService.instance
    ToastService.instance = this
    this.toastList = toastList
  }

  displayToast(toastType, toastPosition) {
    console.log(toastType, toastPosition)
    return (
      <ErrorBoundary>
        <ToastPortal>
          <Toast position={toastPosition} />
        </ToastPortal>
      </ErrorBoundary>
    )
  }
}

export const toastService = new ToastService('some')
