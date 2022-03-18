import ToastsContainer from '../components/ToastsContainer'
class ToastService {
  constructor() {
    if (typeof ToastService.instance === 'object') return ToastService.instance
    ToastService.instance = this
    this.toastList = []
  }

  addToast(toastPosition, toast) {
    this.toastList.push(toast)
    return <ToastsContainer position={toastPosition} toastList={this.toastList} />
  }
}

export const toastService = new ToastService()
