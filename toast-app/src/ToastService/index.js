class ToastService {
  constructor() {
    if (typeof ToastService.instance === 'object')
      return ToastService.instance
    ToastService.instance = this
    this.toastList = []
  }

  removeToast(id) {
    console.log(id)
    /* this.toastList.splice(id, 1) */
  }

  addToast(toast) {
    this.toastList.push(toast)
  }
}

export const toastService = new ToastService()
