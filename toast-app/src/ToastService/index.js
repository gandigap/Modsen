/* eslint-disable node/no-callback-literal */
class ToastService {
  constructor() {
    if (typeof ToastService.instance === 'object')
      return ToastService.instance
    ToastService.instance = this
    this.toastList = []
    this.toastQueue = []
    this.subscribers = new Map()
    this.timer = null
  }

  addToast(toast, delay) {
    this.delay = delay
    this.toastList.length < 3
      ? this.toastList.push({ ...toast, delay })
      : this.toastQueue.push({ ...toast, delay })
    this.notifyAll()
    clearInterval(this.timer)
    this.timer = setInterval(() => {
      this.removeToast()
    }, this.delay)
  }

  removeToast(id = 0) {
    this.toastList.length && this.toastList.splice(id, 1)
    this.toastQueue.length &&
      this.toastList.push(this.toastQueue.shift())
    this.notifyAll()
  }

  notifyAll() {
    this.subscribers.forEach((callback) => {
      callback([...this.toastList])
    })
  }

  subscribe(subscriber, callback) {
    if (!this.subscribers.has(subscriber)) {
      this.subscribers.set(subscriber, callback)
    }
  }

  unsubscribe(subscriber) {
    if (this.subscribers.has(subscriber)) {
      this.subscribers.delete(subscriber)
    }
  }
}

export const toastService = new ToastService()
