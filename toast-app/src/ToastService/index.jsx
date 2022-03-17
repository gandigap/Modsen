import ToastPortal from '../components/ToastPortal'
import Toast from '../components/Toast'

class ToastService {
  constructor(toastList) {
    if (typeof ToastService.instance === 'object') return ToastService.instance
    ToastService.instance = this
    this.toastList = toastList
  }

  displayToast() {
    return (
      <ToastPortal>
        <Toast />
      </ToastPortal>
    )
  }
}

export const toastService = new ToastService('some')
