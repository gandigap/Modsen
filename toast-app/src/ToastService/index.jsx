import React from 'react'
import ToastsContainer from '@/components/ToastsContainer'

class ToastService {
  constructor() {
    if (typeof ToastService.instance === 'object')
      return ToastService.instance
    ToastService.instance = this
    this.toastList = []
  }

  addToast({ toastPosition, toast }) {
    if (this.toastList.length < 3)
      this.toastList = [...this.toastList, toast]

    console.log(this.toastList, 'this')

    return (
      <ToastsContainer
        position={toastPosition}
        toastList={this.toastList}
      />
    )
  }
}

export const toastService = new ToastService()
