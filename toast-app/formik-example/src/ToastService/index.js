class ToastService {
  constructor() {
    if (typeof ToastService.instance === 'object') return ToastService.instance;
    ToastService.instance = this;
    console.log('toast Service');
    this.toastList = [];
    this.subscribers = new Map();
    this.timer = null;
  }

  addToast(toast, delay) {
    this.delay = delay;
    console.log('add toast before', this.toastList);
    if (this.toastList.length < 3) this.toastList.push(toast);
    console.log('add toast after', this.toastList);
    this.notifyAll();
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.removeToast();
    }, this.delay);
  }

  removeToast(id = 0) {
    console.log('remove toast before', this.toastList);
    if (this.toastList.length) {
      this.toastList.splice(id, 1);
      console.log('remove');
    }
    console.log('remove toast after', this.toastList);
    this.notifyAll();
  }

  notifyAll() {
    return this.subscribers.forEach((callback) => {
      callback([...this.toastList]);
    });
  }

  subscribe(subscriber, callback) {
    if (!this.subscribers.has(subscriber)) {
      this.subscribers.set(subscriber, callback);
      console.log('subscribe');
    }
  }

  unsubscribe(subscriber) {
    if (this.subscribers.has(subscriber)) {
      this.subscribers.delete(subscriber);
      console.log('unsubscribe');
    }
  }
}

export const toastService = new ToastService();
