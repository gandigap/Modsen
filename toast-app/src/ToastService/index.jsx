import ToastsContainer from '../components/ToastsContainer'

class ToastService {
  constructor(toastList) {
    if (typeof ToastService.instance === 'object') return ToastService.instance
    ToastService.instance = this
    this.toastList = toastList
  }
    
  addToast({toastPosition,toast}) {    
    this.toastList.push(toast)   
    return <ToastsContainer position={toastPosition} toastList={this.toastList} />
  }
}

export const toastService = new ToastService([])
