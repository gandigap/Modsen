import { ToastsContainer } from 'components/ToastsContainer'
import { toastService } from 'ToastService'

function App() {
  const toastDefaultArgs = {
    content: 'content',
    title: 'title',
    color: 'azure',
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
