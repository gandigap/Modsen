import { toastService } from '../components/ToastService'
import { TOAST_TYPES, TOAST_SIZES } from '../constants'

export default {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    handleClick: { action: 'handleClick' },
    toastType: {
      options: [TOAST_TYPES.info, TOAST_TYPES.warning, TOAST_TYPES.error, TOAST_TYPES.success],
      control: { type: 'radio' },
    },
    size: {
      options: [TOAST_SIZES.small, TOAST_SIZES.medium, TOAST_SIZES.big],
      control: { type: 'select' },
    },
  },
}

const Template = (args) => toastService.display()

export const DefaultToast = Template.bind({})

DefaultToast.args = {
  label: 'Info',
}
