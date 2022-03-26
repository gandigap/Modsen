class ToastService {
  constructor() {
    if (typeof ToastService.instance === 'object')
      return ToastService.instance
    ToastService.instance = this
    this.toastList = []
  }

  removeToast(id = 0) {
    if (this.toastList.length) this.toastList.splice(id, 1)
  }

  addToast(toast) {
    if (this.toastList.length < 3)
      this.toastList.push(toast)
  }
}

export const toastService = new ToastService()
