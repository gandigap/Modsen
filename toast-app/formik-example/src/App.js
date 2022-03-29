import { ToastsContainer } from './components/ToastsContainer'
import { toastService } from './ToastService'

function App() {
  const toastDefaultArgs = {
    title: 'title',
    content: 'content',
    size: 'big',
    animationType: 'horizontal',
    toastType: 'info',
    color: 'red',
    bgcolor: 'azure',
    delay: 1000,
  }

  const handleClick = (type) => () => {
    console.log('click')
    type === 'add'
      ? toastService.addToast(toastDefaultArgs, 5000)
      : toastService.removeToast()
  }
  return (
    <>
      <button onClick={handleClick('add')}>
        Add toast
      </button>
      <button onClick={handleClick('remove')}>
        Remove toast
      </button>
      <ToastsContainer />
    </>
  )
}

export default App
